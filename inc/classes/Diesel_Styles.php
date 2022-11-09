<?php
/**
 * This class handles the registering and enqueueing of styles
 */

class Diesel_Styles {
  public function __construct() {
    add_action('wp_enqueue_scripts', [$this, 'diesel_enqueue_styles']);
  }

  public function diesel_enqueue_styles() {
    wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('diesel_main_styles', get_theme_file_uri('/build/style-index.css'));
    wp_enqueue_style('diesel_extra_styles', get_theme_file_uri('/build/index.css'));
    wp_enqueue_style('style', get_theme_file_uri('style.css'));
  }
}