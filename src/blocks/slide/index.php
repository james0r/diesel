<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/images/library-hero.jpg');
}
?>

<div class="swiper-slide slideshow__slide" style="background-image: url('<?php echo $attributes['imgURL'] ?>')">
    <div class="slideshow__interior container">
      <div class="slideshow__overlay t-center">
        <?php echo $content; ?>
      </div>
    </div>
</div>