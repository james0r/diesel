import Swiper, { Pagination } from 'swiper'
import 'swiper/css'

class Slideshow {
  constructor() {
    if (document.querySelector(".swiper")) {
      const swiper = new Swiper('.swiper', {
        modules: [Pagination],
        loop: true
      })
    }
  }
}

export default Slideshow
