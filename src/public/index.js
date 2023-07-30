import './scss/style.scss';
import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"

import SlideShow from './modules/Slideshow'

new SlideShow();

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()
