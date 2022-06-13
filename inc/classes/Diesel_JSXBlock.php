<?php
/**
*  Class for blocks requiring JSX for block edit or save functions.
*/

class Diesel_JSXBlock extends Diesel_Block {
  public function __construct($name, $renderCallback = null, $data = null) {
    $this->name           = $name;
    $this->data           = $data;
    $this->renderCallback = $renderCallback;
    add_action('init', [$this, 'onInit']);
  }

  public function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/diesel-blocks/{$this->name}.js", ['wp-blocks', 'wp-editor']);

    $ourArgs = [
      'editor_script' => $this->name
    ];

    if ($this->data) {
      wp_localize_script($this->name, $this->name, $this->data);
    }

    if ($this->renderCallback) {
      $ourArgs['render_callback'] = [$this, 'diesel_block_render_callback'];
    }

    register_block_type("dieselblocks/{$this->name}", $ourArgs);
  }
}
