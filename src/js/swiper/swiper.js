import Swiper, { Navigation, Pagination } from 'swiper';
import '../../../node_modules/swiper/swiper.scss'
import '../../../node_modules/swiper/modules/pagination/pagination.scss'
import '../../../node_modules/swiper/modules/navigation/navigation.scss'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.2,

  breakpoints: {
    370: {
      slidesPerView: 1.3
    },
    450: {
      slidesPerView: 1.4
    },
    550: {
      slidesPerView: 1.55
    },
    650: {
      slidesPerView: 1.7
    },
    700: {
      slidesPerView: 1.9
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
