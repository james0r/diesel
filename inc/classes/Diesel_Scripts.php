<?php
/**
 * This class handles the registering and enqueueing of scripts
 */

class Diesel_Scripts {
  public function __construct() {
    add_action('wp_enqueue_scripts', [$this, 'diesel_enqueue_scripts']);
    add_action('wp_enqueue_scripts', [$this, 'diesel_add_comment_script']);
    // add_action('wp_enqueue_scripts', [$this, 'diesel_register_scripts']);
  }

  public function diesel_add_comment_script() {
    if (is_singular() && comments_open() && get_option('thread_comments')) {
      wp_enqueue_script('comment-reply');
    }
  }

  public function diesel_enqueue_scripts() {
    wp_enqueue_script('diesel_main_js', get_theme_file_uri('/build/index.js'), ['jquery'], '1.0', true);
  }

  // public function diesel_register_scripts() {
  // }
}
