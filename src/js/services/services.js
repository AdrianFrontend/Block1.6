
const services = document.querySelector('.services')
const servicesContentText = document.querySelector('.services__content-text')
let readMoreToggle = false

//    Кол-во текста    //

function checkWindowWidth() {
  if (!readMoreToggle) {
    const windowWidth = window.innerWidth

    servicesContentText.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники
    Dell.Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.`;

    if (windowWidth > 767 && windowWidth < 1366) {
      servicesContentText.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники
      Dell.Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
      <br/><br/>
      Мы успешно работаем с 1992 года и заслужили репутацию надежного
      партнера`;
    } else if (windowWidth > 1366) {
      servicesContentText.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники
      Dell.Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
      <br/><br/>
      Мы успешно работаем с 1992 года и заслужили репутацию надежного
      партнера, что подтверждает большое количество постоянных клиентов.
      Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.`
    }
  } else {
    servicesContentText.innerHTML = `Мы являемся авторизованным сервисным центром по ремонту техники
    Dell.Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
    <br/><br/>
    Мы успешно работаем с 1992 года и заслужили репутацию надежного
    партнера, что подтверждает большое количество постоянных клиентов.
    Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur accusantium quos quam 
    architecto magnam? Reprehenderit, quas rem!`
  }
}

window.addEventListener('resize', () => {
  checkWindowWidth()
})

checkWindowWidth()

//    Кнопка читать далее    //

const readMore = services.querySelector('.show-all-button')

readMore.addEventListener('click', () => {
  if (!readMore.classList.contains('show-all-button--active')) {
    readMore.classList.add('show-all-button--active')
    readMoreToggle = true
    checkWindowWidth()
    readMore.textContent = 'Скрыть'
  } else {
    readMore.classList.remove('show-all-button--active')
    readMoreToggle = false
    checkWindowWidth()
    readMore.textContent = 'Читать далее'
  }
})

//    Меню    //

const servicesMenu = services.querySelector('.services__menu')
const servicesMenuItems = services.querySelectorAll('.services__menu-item')

function servicesMenuItemClickHandler(el) {
  el.addEventListener('click', () => {
    if (!el.classList.contains('services__menu-item--active')) {
      let activeMenuItem = servicesMenu.querySelector('.services__menu-item--active')
      activeMenuItem.classList.remove('services__menu-item--active')
      el.classList.add('services__menu-item--active')
    }
  })
}

for (let i = 0; i < servicesMenuItems.length; i++) {
  servicesMenuItemClickHandler(servicesMenuItems[i])
}