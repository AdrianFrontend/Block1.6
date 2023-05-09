
const services = document.querySelector('.services')
const servicesContentText = document.querySelector('.services__content-text')

function checkWindowWidth() {
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
}

window.addEventListener('resize', () => {
  checkWindowWidth()
})

checkWindowWidth()