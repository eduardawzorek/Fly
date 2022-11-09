const pop = document.querySelector('div.pop')
const popup = document.querySelector('.popup-wrapper')
const closepop = document.querySelector('.popup-close')

pop.addEventListener('click',() => {
    popup.style.display = 'block'
})

closepop.addEventListener('click',() => {
    popup.style.display = 'none'
})