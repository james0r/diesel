<?php

/**
 * This class handles the registering and enqueueing of scripts
 */

class Diesel_Scripts {
  public function __construct() {
    add_action('wp_enqueue_scripts', [$this, 'enqueue_public_assets']);
    add_action('init', [$this, 'register_editor_styles']);
    add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
  }

  public function register_editor_styles() {
    add_editor_style(
      array(
        'dist/admin.css',
        'dist/tailwind.css'
      )
    );
  }

  public function enqueue_public_assets() {
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

    wp_enqueue_style(
      'diesel-tailwindcss',
      Diesel::$stylesheet_dir_url . '/dist/tailwind.css',
      false,
      Diesel::$version,
      'all'
    );

    wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('style', get_theme_file_uri('style.css'));
  }

  public function enqueue_admin_assets() {
    wp_enqueue_script('diesel-script-admin', Diesel::$stylesheet_dir_url . '/dist/admin.js', ['jquery'], '1.0', true);

    // wp_enqueue_style(
    //   'diesel-style-admin',
    //   Diesel::$stylesheet_dir_url . '/dist/admin.css',
    //   ['code-editor'],
    //   Diesel::$version,
    //   'all'
    // );
  }
}