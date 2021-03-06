<?php
/**
 * This class handles general theme setup actions.
 * Handles many things often done in functions.php.
 */

class Diesel_Init {
  public function __construct() {
    add_action('after_setup_theme', array($this, 'diesel_add_theme_supports'));
    add_action('after_setup_theme', array($this, 'diesel_add_image_sizes'));
    add_action('after_setup_theme', array($this, 'diesel_add_editor_styles'));

    $this->diesel_disable_wp_noise();
    $this->diesel_register_blocks();

    Diesel()->requireOnce('/inc/helpers.php');
  }

  public function diesel_disable_wp_noise() {
    remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
  }

  public function diesel_add_image_sizes() {
    add_image_size('pageBanner', 1500, 350, true);
  }

  public function diesel_add_theme_supports() {
    add_theme_support('editor-styles');
  }

  public function diesel_add_editor_styles() {
    add_editor_style(['build/style-index.css', 'build/index.css']);
  }

  public function diesel_register_blocks() {
    new Diesel_StaticBlock('eventsandblogs');
    new Diesel_StaticBlock('footer');
    new Diesel_StaticBlock('page');
    new Diesel_StaticBlock('archive');
    new Diesel_StaticBlock('searchresults');
    new Diesel_StaticBlock('search');
    
    new Diesel_JSXBlock('header', true);
    new Diesel_JSXBlock('banner', true, ['fallbackImage' => get_theme_file_uri('/images/library-hero.jpg')]);
    new Diesel_JSXBlock('genericheading');
    new Diesel_JSXBlock('genericbutton');
    new Diesel_JSXBlock('slideshow', true);
    new Diesel_JSXBlock('slide', true);
    new Diesel_JSXBlock('sociallinks', true);
    new Diesel_JSXBlock('sociallink', true);
  }
}