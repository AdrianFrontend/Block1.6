const devicesListWrapper = document.querySelector('.devices')

//    Показать всё    //

let showAllButton = devicesListWrapper.querySelector('.show-all-button')
let deviceItems = devicesListWrapper.querySelectorAll('.devices-list__item-link')

let visible = false
showAllButton.addEventListener('click', (event) => {
  event.preventDefault()

  if (!showAllButton.classList.contains('show-all-button--active')) {
    showAllButton.classList.add('show-all-button--active')
  } else {
    showAllButton.classList.remove('show-all-button--active')
  }

  if (!visible) {
    for (let i = 0; i < deviceItems.length; i++) {
      deviceItems[i].classList.add('devices-list__item-link--visible')
    }
    showAllButton.textContent = 'Скрыть'
    visible = true
  } else {
    for (let i = 0; i < deviceItems.length; i++) {
      deviceItems[i].classList.remove('devices-list__item-link--visible')
    }
    showAllButton.textContent = 'Показать ещё'
    visible = false
  }
})