import './sidebar/sidebar'
import './services/services'

// import Swiper, { Navigation, Pagination } from 'swiper';
// // import '../../node_modules/swiper/swiper.scss'
// // import '../../node_modules/swiper/modules/pagination/pagination.scss'
// // import '../../node_modules/swiper/modules/navigation/navigation.scss'
import '../scss/style.scss'

// console.log('Works!')

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination],
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1.2,

//   breakpoints: {
//     350: {
//       slidesPerView: 1.3
//     },
//     370: {
//       slidesPerView: 1.4
//     },
//     400: {
//       slidesPerView: 1.55
//     },
//     450: {
//       slidesPerView: 1.7
//     },
//     480: {
//       slidesPerView: 1.85
//     },
//     550: {
//       slidesPerView: 2
//     },
//     600: {
//       slidesPerView: 2.2
//     },
//     650: {
//       slidesPerView: 2.5
//     },
//     700: {
//       slidesPerView: 2.8
//     }
//   },

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
// });

// // Show all button


// let showAllButton = document.querySelector('.show-all-button')

// showAllButton.addEventListener("click", () => {
//   if (showAllButton.classList.contains('show-all-button--closed')) {
//     showAllButton.classList.remove('show-all-button--closed')
//     showAllButton.classList.add('show-all-button--opened')
//   } else {
//     showAllButton.classList.remove('show-all-button--opened')
//     showAllButton.classList.add('show-all-button--closed')
//   }
// })

// let windowWidth = window.innerWidth
// let hiddenElements = document.querySelectorAll(".brand-card")

// if (windowWidth <= 1015) {
//   for (let i = 6; i < hiddenElements.length; i++) {
//     hiddenElements[i].classList.add('brand-card--hidden')
//   }

//   showAllButton.addEventListener('click', (event) => {
//     if (hiddenElements[6].classList.contains("brand-card--hidden")) {
//       for (let i = 6; i < hiddenElements.length; i++) {
//         hiddenElements[i].classList.remove('brand-card--hidden')
//       }
//     } else {
//       for (let i = 6; i < hiddenElements.length; i++) {
//         hiddenElements[i].classList.add('brand-card--hidden')
//       }
//     }
//   })
// } else if (windowWidth > 1015 && windowWidth <= 1391) {
//   for (let i = 8; i < hiddenElements.length; i++) {
//     hiddenElements[i].classList.add('brand-card--hidden')
//   }

//   showAllButton.addEventListener('click', (event) => {
//     if (hiddenElements[8].classList.contains("brand-card--hidden")) {
//       for (let i = 8; i < hiddenElements.length; i++) {
//         hiddenElements[i].classList.remove('brand-card--hidden')
//       }
//     } else {
//       for (let i = 8; i < hiddenElements.length; i++) {
//         hiddenElements[i].classList.add('brand-card--hidden')
//       }
//     }
//   })
// } else if (windowWidth > 1391) {
//   hiddenElements[10].classList.add('brand-card--hidden')

//   showAllButton.addEventListener('click', (event) => {
//     if (hiddenElements[10].classList.contains("brand-card--hidden")) {
//       hiddenElements[10].classList.remove('brand-card--hidden')
//     } else {
//       hiddenElements[10].classList.add('brand-card--hidden')
//     }
//   })
// }



