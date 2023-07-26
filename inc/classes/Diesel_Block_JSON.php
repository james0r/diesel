<?php

class Diesel_Block_JSON {

  private $name;

  private $data = [];

  private $editor_script_handle = '';

  function __construct($name, $data = null) {
    $this->name = $name;
    $this->data = $data;

    add_action('init', [$this, 'onInit']);

    if (!empty($this->data)) {
      $this->editor_script_handle = sprintf('diesel-%s-editor-script', $this->name);

      add_action('admin_enqueue_scripts', [$this, 'inline_scripts']);
    }
  }

  function inline_scripts() {
    $global_object_name = diesel_dashes_to_camel_case('diesel-' . $this->name);

    wp_localize_script($this->editor_script_handle, $global_object_name, $this->data);
  }

  function onInit() {
    register_block_type(Diesel::$stylesheet_dir_path . '/dist/blocks/' . $this->name);
  }
}