import "../css/style.scss"
import Slideshow from "./modules/Slideshow"
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

const slideShow = new Slideshow()