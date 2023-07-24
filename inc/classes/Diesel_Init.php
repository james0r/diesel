<?php
/**
 * This class handles general theme setup actions.
 */

class Diesel_Init {
  public function __construct() {
    add_action('after_setup_theme', array($this, 'add_theme_supports'));
    add_action('after_setup_theme', array($this, 'add_image_sizes'));
    add_action('after_setup_theme', array($this, 'add_editor_styles'));

    $this->disable_wp_noise();
    $this->register_blocks();
  }

  public function disable_wp_noise() {
    remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
    remove_theme_support('core-block-patterns');
  }

  public function add_image_sizes() {
    add_image_size('pageBanner', 1500, 350, true);
  }

  public function add_theme_supports() {
    // add_theme_support('editor-styles');
  }

  public function add_editor_styles() {
    add_editor_style(['dist/style-index.css', 'dist/index.css']);
  }

  
  public function register_blocks() {
    new Diesel_NonJSXBlock('eventsandblogs', true);
    new Diesel_NonJSXBlock('header', true);
    new Diesel_NonJSXBlock('footer', true);
    new Diesel_NonJSXBlock('page', true);
    new Diesel_NonJSXBlock('archive', true);
    new Diesel_NonJSXBlock('searchresults', true);
    new Diesel_NonJSXBlock('search', true);
    new Diesel_NonJSXBlock('non-jsx-basic');
    
    new Diesel_JSXBlock('accordion-esc', false);
    new Diesel_JSXBlock('accordion-item', true);
    new Diesel_JSXBlock('banner', true, ['fallbackImage' => get_theme_file_uri('/images/library-hero.jpg')]);
    new Diesel_JSXBlock('genericheading');
    new Diesel_JSXBlock('genericbutton');
    new Diesel_JSXBlock('slideshow', true);
    new Diesel_JSXBlock('slide', true);
    new Diesel_JSXBlock('sociallinks', true);
    new Diesel_JSXBlock('sociallink', true);
    new Diesel_JSXBlock('inspector-controls-example', false);
    new Diesel_JSXBlock('dynamic-block-example', false);
    new Diesel_JSXBlock('course-text-box', false);
  }
}