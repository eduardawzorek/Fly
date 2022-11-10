const pop = document.querySelector('div.pop')
const popup = document.querySelector('.popup-wrapper')
const closepop = document.querySelector('.popup-close')
let imagem = document.getElementById('one')
let imagens = ["https://www.granmarquise.com.br/wp-content/uploads/2018/02/1-2.png", "https://www.granmarquise.com.br/wp-content/uploads/2018/02/2-3.png", "https://www.google.com/"]
let cont = 0

pop.addEventListener('click',() => {
    popup.style.display = 'block'
})

closepop.addEventListener('click',() => {
    popup.style.display = 'none'
})

function mudar() {
    for(cont == 0; cont < 2; cont++) {
        imagem.src = imagens[cont++]
    }
    console.log(cont)
}

function retornar() {
    imagens.src = imagens[cont--]
}








