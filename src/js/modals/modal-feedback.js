let openButtons = document.querySelectorAll('.message-button')
let modalFeedback = document.querySelector('.modal-feedback')
let closeButton = modalFeedback.querySelector('.close-button')
let opened = false

function openModal(event) {
  event.preventDefault()

  modalFeedback.classList.add('modal--visible')

  function open() {
    modalFeedback.classList.add('modal--open')
    document.querySelector('.page-header').classList.add('modal-blur')
    document.querySelector('main').classList.add('modal-blur')
    document.querySelector('.sidebar').classList.add('modal-blur')
  }

  setTimeout(open, 1)
}

for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener('click', (event) => {
    openModal(event)
  })
}

function closeModal(event) {
  event.preventDefault()

  modalFeedback.classList.remove('modal--open')
  document.querySelector('.page-header').classList.remove('modal-blur')
  document.querySelector('main').classList.remove('modal-blur')
  document.querySelector('.sidebar').classList.remove('modal-blur')

  function close() {
    modalFeedback.classList.remove('modal--visible')
  }

  setTimeout(close, 500)
}

closeButton.addEventListener('click', (event) => {
  closeModal(event)
})

document.addEventListener('click', (event) => {
  if (
    event.target.classList.length == 0
    || !event.target.classList[0].includes('modal')
    && !event.target.classList[0].includes('message-button')
  ) {
    closeModal(event)
  }
})