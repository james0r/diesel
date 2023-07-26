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