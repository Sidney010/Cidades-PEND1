'use strict'

const botaoAuto = document.getElementById('auto')
const botaoTrocar = document.getElementById('trocar')
const cidades = [
    "./img/Iguacu.jpg",
    "./img/Monte.jpg",
    "./img/Bariloche.jpg",
    "img/Japao.jpg",
    "img/islandia.jpg",
    "img/Paris.jpg",
    "img/Taiwan.jpg"
]


function trocarCidade () {
    const cidade = document.getElementById('cidade').value
    document.documentElement.style.setProperty('--bg-image', `url(./img/${cidade}.jpg)`)
}

function trocarAutomatico (){
    //posição da imagem representada pela letra i
    let i = 0

    function slide() {
        document.documentElement.style.setProperty('--bg-image', `url(${cidades[i]})`)
        i++ % cidades.length
    }

    slide()
    setInterval(slide, 3000)
}

botaoTrocar.addEventListener('click', trocarCidade)
botaoAuto.addEventListener('click', trocarAutomatico)
