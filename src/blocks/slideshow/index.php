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

<script>
document.addEventListener('alpine:init', () => {
  Alpine.data('dieselSlideshow', function() {
    return {
      swiperEl: document.querySelector(`[data-block-id="${this.$el.dataset.blockId}"]`),
      isPaginated: this.$el.dataset.isPaginated,
      init() {
        new Swiper(this.swiperEl, {
          modules: [window.SwiperPagination],
          loop: true,
          pagination: this.isPaginated === 'true' ? {
            el: '.swiper-pagination'
          } : false
        })
      }
    }
  })
})
</script>