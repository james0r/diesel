<?php

class Diesel_Block_JSX {

  private $name;

  private $renderCallback;

  private $data;

  function __construct($name, $renderCallback = null, $data = null) {
    $this->name = $name;
    $this->data = $data;
    $this->renderCallback = $renderCallback;
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
    
    if ($this->data) {
      wp_localize_script($this->name, $this->name, $this->data);
    }

    $ourArgs = array(
      'editor_script' => $this->name
    );

    if ($this->renderCallback) {
      $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
    }

    register_block_type("diesel/{$this->name}", $ourArgs);
  }
}