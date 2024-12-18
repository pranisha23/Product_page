const hamburger = document.querySelector('.side-bar')
const navmenu = document.querySelector('.menu')
const close = document.querySelector('.close')
const filter = document.querySelector('.select')
const option = document.querySelector('.options')

hamburger.addEventListener('click', () => {
  navmenu.classList.toggle('active')
})

close.addEventListener('click', () => {
  navmenu.classList.remove('active')
})

filter.addEventListener('click', () => {
  option.classList.toggle('active')
})
