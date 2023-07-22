<?php

class Diesel_Block {

  public $name;

  public $renderCallback;

  public $data;

  public $script_path;

  public function __construct($name, $renderCallback = null, $data = null) {
    $this->name           = $name;
    $this->renderCallback = $renderCallback;
    $this->data           = $data;
    $this->script_path    = null;

    add_action('init', [$this, 'onInit']);
  }

  public function render_callback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/src/diesel-blocks/{$this->name}/index.php");
    return ob_get_clean();
  }

  public function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . $this->script_path, ['wp-blocks', 'wp-editor']);

    $ourArgs = [
      'editor_script' => $this->name
    ];

    if ($this->data) {
      wp_localize_script($this->name, $this->name, $this->data);
    }

    if ($this->renderCallback) {
      $ourArgs['render_callback'] = [$this, 'render_callback'];
    }

    register_block_type("diesel/{$this->name}", $ourArgs);
  }
}
