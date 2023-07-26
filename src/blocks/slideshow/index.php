<div
  x-data="dieselSlideshow()"
  class="swiper slideshow"
  data-block-id="<?php echo $attributes['blockId']; ?>"
  data-is-paginated="<?php echo isset($attributes['pagination']) ? 'true' : 'false'; ?>"
>
  <div class="swiper-wrapper">
    <?php echo $content; ?>
  </div>
  <div class="swiper-pagination"></div>
</div>