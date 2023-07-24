<?php

class Diesel_Block_Placeholder {

  private $name;

  function __construct($name) {
    $this->name = $name;
    add_action('init', [$this, 'onInit']);
  }

  function ourRenderCallback($attributes, $content) {
    ob_start();
    require Diesel()->getAssetPath() . "/blocks/{$this->name}/index.php";
    return ob_get_clean();
  }

  function onInit() {
    $script_asset_path = Diesel()->getAssetPath() . "/blocks/{$this->name}/index.asset.php";

    if ( ! is_readable( $script_asset_path ) ) {
        throw new Error(
            'Script asset path is not readable. You need to run `npm start` or `npm run build` first.'
        );
    }

    $script_asset = require( $script_asset_path );

    wp_register_script($this->name, Diesel::$stylesheet_dir_url . "/dist/blocks/{$this->name}/index.js", $script_asset['dependencies']);
    
    register_block_type("diesel/{$this->name}", array(
      'editor_script' => $this->name,
      'render_callback' => [$this, 'ourRenderCallback']
    ));
  }
}