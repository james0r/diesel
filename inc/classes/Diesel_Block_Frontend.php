<?php

class Diesel_Block_Frontend {

  private $name;

  function __construct($name) {
    $this->name = $name;
    add_action('init', [$this, 'adminAssets']);
  }

  function adminAssets() {
    wp_register_style($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}-admin.css");
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}-admin.js", array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('ourplugin/' . $this->name, array(
      'editor_script' => $this->name,
      'editor_style' => $this->name,
      'render_callback' => array($this, 'theHTML')
    ));
  }

  function theHTML($attributes) {
    if (!is_admin()) {
      wp_enqueue_script("{$this->name}-frontend", get_stylesheet_directory_uri() . "/build/{$this->name}-frontend.js", array('wp-element'), '1.0', true);
      wp_enqueue_style("{$this->name}-frontend", get_stylesheet_directory_uri() . "/build/{$this->name}-frontend.css");
    }    

    ob_start(); ?>
    <div class="<?php echo $this->name ?>-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
  }
}