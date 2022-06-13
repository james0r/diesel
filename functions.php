<?php

if (!defined('DIESEL_VERSION')) {
  define('DIESEL_VERSION', '0.0.1');
}

if (!defined('DIESEL_MIN_PHP_VER_REQUIRED')) {
  define('DIESEL_MIN_PHP_VER_REQUIRED', '7.4');
}

if (!defined('DIESEL_MIN_WP_VER_REQUIRED')) {
  define('DIESEL_MIN_WP_VER_REQUIRED', '6.0');
}

// Developer mode.
if (!defined('DIESEL_DEV_MODE')) {
  define('DIESEL_DEV_MODE', false);
}

require_once wp_normalize_path(get_template_directory() . '/inc/helpers.php');

require_once wp_normalize_path(get_template_directory() . '/inc/classes/Diesel.php');

require_once wp_normalize_path(get_template_directory() . '/inc/classes/Diesel_Autoload.php');

new Diesel_Autoload;

function Diesel() {
  return Diesel::getInstance();
}

Diesel();

function foo_gallery_render( $attributes, $content ) {

	return '<h1>Custom rendered menu</h1>';
}

