<?php

/**
 * This class handles overrides for rendering core blocks.
 */

class Diesel_Core_Block_Overrides {
  public function __construct() {
    add_filter( 'render_block', [$this, 'on_render_block'], 10, 3 );
  }

  public function on_render_block($block_content, $block) {
    if ( $block['blockName'] === 'core/navigation' ) {
      // dd($block_content);
      $default_svg_icon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="7.5" width="16" height="1.5" /><rect x="4" y="15" width="16" height="1.5" /></svg>';
      $replacement_svg_icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>';

      $block_content = str_replace($default_svg_icon, $replacement_svg_icon, $block_content);

      $default_close_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg>';
      $replacement_close_icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
      
      $block_content = str_replace($default_close_icon, $replacement_close_icon, $block_content);

      return $block_content;
    }

    return $block_content;
  }

  public function render_core_navigation($block_content, $block) {

  }
}