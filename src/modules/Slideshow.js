import Swiper, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

class Slideshow {
  constructor() {
    window.Swiper = Swiper
    window.SwiperPagination = Pagination
  }
}

export default Slideshow
