<div 
  class="swiper slideshow" 
  id="slideshow-<?php echo $attributes['blockId']; ?>">
  <div class="swiper-wrapper">
    <?php echo $content; ?>
  </div>
  <div class="swiper-pagination"></div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', (event) => {
    new Swiper('#slideshow-<?php echo $attributes['blockId']; ?>', {
      modules: [window.SwiperPagination],
      loop: true,
      <?php 
        if (isset($attributes['pagination'])) {
          echo "pagination: { el: '.swiper-pagination' }";
        }
      ?>
    })
  });
</script>