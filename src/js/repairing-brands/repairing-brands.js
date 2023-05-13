const repairingBrands = document.querySelector('.repairing-brands')

//    Показать всё    //

let showAllButton = repairingBrands.querySelector('.show-all-button')
let brandCardsWrappers = repairingBrands.querySelectorAll(".brand-card__wrapper")

let visible = false
showAllButton.addEventListener('click', (event) => {
  event.preventDefault()

  if (!showAllButton.classList.contains('show-all-button--active')) {
    showAllButton.classList.add('show-all-button--active')
  } else {
    showAllButton.classList.remove('show-all-button--active')
  }

  if (!visible) {
    for (let i = 0; i < brandCardsWrappers.length; i++) {
      brandCardsWrappers[i].classList.add('brand-card__wrapper--visible')
    }
    showAllButton.textContent = 'Скрыть'
    visible = true
  } else {
    for (let i = 0; i < brandCardsWrappers.length; i++) {
      brandCardsWrappers[i].classList.remove('brand-card__wrapper--visible')
    }
    showAllButton.textContent = 'Показать ещё'
    visible = false
  }
})
