const sidebar = document.querySelector('.sidebar')

//    Открытие/закрытие сайдбара    //

function checkWindowWidth() {
  const windowWidth = window.innerWidth

  if (windowWidth < 1366) {
    function openSidebar(event) {
      event.preventDefault()

      sidebar.classList.add('sidebar--visible')

      function open() {
        sidebar.classList.add('sidebar--open')
        document.querySelector('.page-header').classList.add('blur')
        document.querySelector('main').classList.add('blur')
      }

      setTimeout(open, 1)
    }

    function closeSidebar(event) {
      event.preventDefault()

      document.querySelector('.page-header').classList.remove('blur')
      document.querySelector('main').classList.remove('blur')
      sidebar.classList.remove('sidebar--open')

      function close() {

      }

      setTimeout(close, 500)
    }

    if (sidebar.classList.contains('sidebar--open--on-pc')) {
      sidebar.classList.remove('sidebar--open--on-pc')
    }

    const closeButton = sidebar.querySelector('.sidebar__icon[title="Закрыть меню"]')
    closeButton.addEventListener('click', (event) => closeSidebar(event))

    const burgerButton = document.querySelector('.header-nav__menu-button')
    burgerButton.addEventListener('click', (event) => openSidebar(event))

    document.addEventListener('click', (event) => {
      if (
        event.target.classList.length == 0
        || !event.target.classList[0].includes('sidebar')
        && !event.target.classList[0].includes('open-sidebar-button')
      ) {
        closeSidebar(event)
      }
    })
  } else {
    sidebar.classList.remove('sidebar--closed')
    sidebar.classList.add('sidebar--open--on-pc')
  }
}

window.addEventListener('resize', () => {
  checkWindowWidth()
})

checkWindowWidth()

//    Поведение элементов меню    //

const menuItems = sidebar.querySelectorAll('.sidebar__main-menu-item')

function sidebarMenuItemClickHandler(el) {
  el.addEventListener('click', (event) => {
    let currentEl = sidebar.querySelector('.sidebar__main-menu-item--current')
    currentEl.classList.remove('sidebar__main-menu-item--current')

    event.preventDefault()

    el.classList.add('sidebar__main-menu-item--current')
  })
}

for (let i = 0; i < menuItems.length; i++) {
  sidebarMenuItemClickHandler(menuItems[i])
}