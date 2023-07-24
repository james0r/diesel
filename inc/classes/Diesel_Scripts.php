<?php

/**
 * This class handles the registering and enqueueing of scripts
 */

class Diesel_Scripts {
  public function __construct() {
    add_action('wp_enqueue_scripts', [$this, 'enqueue_public_scripts']);
    add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
  }

  public function enqueue_public_scripts() {
    wp_enqueue_style(
      'diesel-style',
      Diesel::$stylesheet_dir_url . '/dist/public.css',
      false,
      Diesel::$version,
      'all'
    );

    wp_enqueue_script(
      'diesel-script',
      Diesel::$stylesheet_dir_url . '/dist/public.js',
      ['wp-hooks', 'jquery'],
      Diesel::$version,
      true
    );
  }

  public function enqueue_admin_scripts() {
    wp_enqueue_script('diesel-script-admin', Diesel::$stylesheet_dir_url . '/dist/admin.js', ['jquery'], '1.0', true);

    wp_enqueue_style(
      'diesel-style-admin',
      Diesel::$stylesheet_dir_url . '/dist/admin.css',
      ['code-editor'],
      Diesel::$version,
      'all'
  );
  }
}