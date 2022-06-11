<?php

// Remove SVG noise from <body>
remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');

function diesel_features() {
  add_theme_support('editor-styles');
  add_editor_style(['build/style-index.css', 'build/index.css']);
  add_image_size('pageBanner', 1500, 350, true);
}

add_action('after_setup_theme', 'diesel_features');

function diesel_files() {
  wp_enqueue_script('diesel_main_js', get_theme_file_uri('/build/index.js'), ['jquery'], '1.0', true);
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  wp_enqueue_style('diesel_main_styles', get_theme_file_uri('/build/style-index.css'));
  wp_enqueue_style('diesel_extra_styles', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'diesel_files');

class StaticBlock {
  public function __construct($name) {
    $this->name = $name;

    add_action('init', [$this, 'onInit']);
  }

  public function ourRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/diesel-blocks/{$this->name}.php");
    return ob_get_clean();
  }

  public function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/diesel-blocks/{$this->name}.js", ['wp-blocks', 'wp-editor']);

    register_block_type("dieselblocks/{$this->name}", [
      'editor_script'   => $this->name,
      'render_callback' => [$this, 'ourRenderCallback']
    ]);
  }
}

new StaticBlock('eventsandblogs');
new StaticBlock('header');
new StaticBlock('footer');

class JSXBlock {
  public function __construct($name, $renderCallback = null, $data = null) {
    $this->name           = $name;
    $this->data           = $data;
    $this->renderCallback = $renderCallback;
    add_action('init', [$this, 'onInit']);
  }

  public function ourRenderCallback($attributes, $content) {
    ob_start();
    require get_theme_file_path("/diesel-blocks/{$this->name}.php");
    return ob_get_clean();
  }

  public function onInit() {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", ['wp-blocks', 'wp-editor']);

    $ourArgs = [
      'editor_script' => $this->name
    ];

    if ($this->data) {
      wp_localize_script($this->name, $this->name, $this->data);
    }

    if ($this->renderCallback) {
      $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
    }

    register_block_type("dieselblocks/{$this->name}", $ourArgs);
  }
}

new JSXBlock('banner', true, ['fallbackImage' => get_theme_file_uri('/images/library-hero.jpg')]);
new JSXBlock('genericheading');
new JSXBlock('genericbutton');
new JSXBlock('slideshow', true);
new JSXBlock('slide', true);

add_filter('the_content','diesel_enqueue_swiper_if_has_slideshow');

function diesel_enqueue_swiper_if_has_slideshow($content = ""){
  if(has_block('my-awesome/block-type')){
        wp_enqueue_script('my-awesome-script',$path_of_script,$needed_scripts,$version_of_script,true);
   //Be aware that for this to work, the load_in_footer MUST be set to true, as 
   //the scripts for the header are already echoed out at this point
     }
   return $content;
}
