<?php

class Diesel_Block {
  public function diesel_block_render_callback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/diesel-blocks/{$this->name}/index.php");
    return ob_get_clean();
  }

}