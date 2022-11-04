<?php
/**
* Core class for the Diesel Theme.
*/

class Diesel {
  private static $theme_prefix;
  
  public static $instance = null;

  public static $template_dir_path = '';

  public static $template_dir_url = '';

  public static $stylesheet_dir_path = '';

  public static $stylesheet_dir_url = '';

  public static $scripts_dir_path = '';

  public static $scripts_dir_url = '';

  public static $version = DIESEL_VERSION;

  private function __construct() {
    self::$theme_prefix = 'Diesel';
    self::$template_dir_path = wp_normalize_path(get_template_directory());
    self::$template_dir_url = get_template_directory_uri();
    self::$stylesheet_dir_path = wp_normalize_path(get_stylesheet_directory());
    self::$stylesheet_dir_url = get_stylesheet_directory_uri();
  }

  // The Diesel Monolith is the Diesel instance that contains static member variables for all other class instances.
  // Here, Diesel object is instantiated from within the class itself
  // and stored as a static variable.

  public static function getInstance() {
    if (self::$instance == null) {
      self::$instance = new Diesel();

      self::$instance->init = new Diesel_Init;
      self::$instance->scripts = new Diesel_Scripts;
      self::$instance->styles = new Diesel_Styles;
    }

    return self::$instance;
  }

  public function getPrefix() {
    return self::$theme_prefix;
  }

  public function requireOnce($path = '', $base = '') {
    if ($base === '') {
      $base = self::$template_dir_path;
    }

    if (strpos($path, '/') != 0) {
      $path = '/' . $path;
    }

    if ($this->ifFileExists($base . $path)) {
      require_once $base . $path;
    } else {
      throw new Exception($path . 'File Not Found');
    }
    return $this; // Return class instance for method chaining
  }

  private function ifFileExists($full_path) {
    if (file_exists($full_path)) {
      return true;
    }
  }

  public static function get_normalized_theme_version() {
    $theme_version = self::$version;
    $theme_version_array = explode('.', $theme_version);

    if (isset($theme_version_array[2]) && '0' === $theme_version_array[2]) {
      $theme_version = $theme_version_array[0] . '.' . $theme_version_array[1];
    }

    return $theme_version;
  }
}