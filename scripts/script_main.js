"use strict"

let horaMostrador = document.querySelector('.hora>h1')
let minutoMostrador = document.querySelector('.minuto>h1')
let segundoMostrador = document.querySelector('.segundo>h1')

function mudançaHorário() {
    let date = new Date()
    let hora = date.getHours()
    let minuto = date.getMinutes()
    let segundo = date.getSeconds()

    segundoMostrador.style.transition = '500ms ease';

    if (hora < 10) {
        horaMostrador.innerText = `0${hora}`
    } else {
        horaMostrador.innerText = hora
    }

    if (minuto < 10) {
        minutoMostrador.innerText = `0${minuto}`
    } else {
        minutoMostrador.innerText = minuto
    }

    if (segundo < 10) {
        segundoMostrador.innerText = `0${segundo}`
    } else {
        segundoMostrador.innerText = segundo
    }
}

setInterval(mudançaHorário, 1000)