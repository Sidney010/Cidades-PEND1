https://github.com/Sidney010/Cidades-PEND1'use strict'

const butaoTrocarCor = document.getElementById('trocar-cor')

function trocarCor () {
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--bg-color', cor)
}

butaoTrocarCor.addEventListener('click', trocarCor)