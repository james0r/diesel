<?php

/**
 * This class handles the registering and enqueueing of scripts
 */

class Diesel_Scripts {
  public function __construct() {
    add_action('wp_enqueue_scripts', [$this, '_enqueue_public_scripts']);
    add_action('admin_enqueue_scripts', [$this, '_enqueue_admin_scripts']);
    add_action('enqueue_block_editor_assets', [$this, '_enqueue_editor_assets'], 1);
  }

  public function _enqueue_public_scripts() {
    wp_enqueue_style(
      'diesel-style',
      Diesel()->getAssetPath() . '/public.css',
      false,
      Diesel::$version,
      'all'
    );

    wp_enqueue_script(
      'diesel-script',
      Diesel()->getAssetPath() . '/public.js',
      ['wp-hooks', 'jquery'],
      Diesel::$version,
      true
    );
  }

  public function _enqueue_admin_scripts() {
    wp_enqueue_script('diesel-script-admin', Diesel::$stylesheet_dir_url . '/dist/admin.js', ['jquery'], '1.0', true);
  }

  public function _enqueue_editor_assets() {
    $script_asset_path = Diesel()->getAssetPath() . "/editor.asset.php";

    if (!is_readable($script_asset_path)) {
      throw new Error(
        'You need to run `npm start` or `npm run build` for the "create-block/register-block-type" block first.'
      );
    }

    $script_asset = require($script_asset_path);

    wp_enqueue_script(
      'diesel-script-editor',
      Diesel()->getAssetPath() . '/editor.js',
      array_merge($script_asset['dependencies'], ['code-editor', 'csslint']),
      $script_asset['version'],
      true
    );

    wp_localize_script(
      'diesel-script-editor',
      'Diesel_Object',
      [
        'postTypes' => array_map(function ($post_type) {
          return $post_type->name = $post_type->labels->singular_name;
        }, get_post_types([], 'objects'))
      ]
    );

    wp_enqueue_style(
      'diesel-style-editor',
      Diesel()->getAssetPath() . '/editor.css',
      ['code-editor'],
      Diesel::$version,
      'all'
    );
  }

  public function _register_scripts() {
  }
}