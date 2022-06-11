<?php
/**
*  Class for blocks with no editor configurations using a PHP render callback.
*/

class Diesel_StaticBlock extends Diesel_Block {
  public function __construct($name) {
    $this->name = $name;

    add_action('init', [$this, 'onInit']);
  }

  public function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/diesel-blocks/{$this->name}.js", ['wp-blocks', 'wp-editor']);

    register_block_type("dieselblocks/{$this->name}", [
      'editor_script'   => $this->name,
      'render_callback' => [$this, 'diesel_block_render_callback']
    ]);
  }
}