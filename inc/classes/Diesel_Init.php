<?php

/**
 * This class handles general theme setup actions.
 */

class Diesel_Init {
  public function __construct() {
    add_action('after_setup_theme', array($this, 'register_theme_support'));
    add_action('after_setup_theme', array($this, 'register_image_sizes'));

    $this->disable_wp_noise();
    $this->register_blocks();

    global $sections_included;
    $sections_included = array();
  }

  public function disable_wp_noise() {
    remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
    remove_theme_support('core-block-patterns');
  }

  public function register_image_sizes() {
    add_image_size('pageBanner', 1500, 350, true);
  }

  public function register_theme_support() {
    add_theme_support('editor-styles');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
  }

  public function register_blocks() {
    new Diesel_Block_Placeholder('eventsandblogs');
    new Diesel_Block_Placeholder('header');
    new Diesel_Block_Placeholder('footer');
    new Diesel_Block_Placeholder('page');
    new Diesel_Block_Placeholder('archive');
    new Diesel_Block_Placeholder('searchresults');
    new Diesel_Block_Placeholder('search');
    new Diesel_Block_Placeholder('non-jsx-basic');

    new Diesel_Block_JSON('banner', ['fallbackImage' => get_theme_file_uri('/images/library-hero.jpg')]);
    new Diesel_Block_JSON('slide', ['fallbackImage' => get_theme_file_uri('/images/library-hero.jpg')]);
    new Diesel_Block_JSON('slideshow');

    new Diesel_Block_JSX('accordion-esc', false);
    new Diesel_Block_JSX('accordion-item', true);
    new Diesel_Block_JSX('genericheading');
    new Diesel_Block_JSX('genericbutton');
    new Diesel_Block_JSX('sociallinks', true);
    new Diesel_Block_JSX('sociallink', true);
    new Diesel_Block_JSX('inspector-controls-example', false);
    new Diesel_Block_JSX('dynamic-block-example', false);
    new Diesel_Block_JSX('course-text-box', false);
  }
}