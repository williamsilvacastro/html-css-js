let rdDevs = {
    getElem:  function(elemento) {
        return document.querySelector(elemento)
    },
    getAllElem: function(elemento) {
        return document.querySelectorAll(elemento)
    },
    logElem: function(elemento) {
        console.log(document.querySelector(elemento))
    },
    logAllElem: function(elemento) {
        console.log(document.querySelectorAll(elemento))
    }
}

//click
let btn = rdDevs.getElem("#btn-onclick")
// btn.onclick = function() {
//     console.log("Clicou")
// }

btn.addEventListener('click', function() {
    console.log('clicou com addEventListener')
})

//mouseover
// btn.onmouseover = function() {
//     console.log('passou o mouse')
//     rdDevs.getElem('#btn').style.display = 'block'
// }

btn.addEventListener('mouseover', function() {
    console.log('passou o mouse')
})

//mouseout
// btn.onmouseout = function() {
//     console.log('tirou o mouse')
//     rdDevs.getElem('#btn').style.display = 'none'
// }

btn.addEventListener('mouseout', function() {
    console.log('tirou o mouse')
})

//change
let input = rdDevs.getElem('#input-change')
// input.onchange = function() {
//     console.log("mudou")
// }

input.addEventListener('change', function() {
    console.log('mudou')
})

//keydown
// input.onkeydown = function() {
//     console.log('teclou')
// }
input.addEventListener('keydown', function() {
         console.log('teclou')
})

//this
let btnComprar = rdDevs.getElem('.btn-comprar')

function trocarTextoOver() {
    this.textContent = 'Aproveite!!!'
}

function trocarTextoOut() {
    this.textContent = 'Comprar'
}

btnComprar.addEventListener('mouseover', trocarTextoOver)
btnComprar.addEventListener('mouseout', trocarTextoOut)
btnComprar.removeEventListener('mouseout', trocarTextoOut)

let btnComprar3 = rdDevs.getElem('.btn-comprar-3')
btnComprar3.addEventListener('mouseover', trocarTextoOver)
btnComprar3.addEventListener('mouseout', trocarTextoOut)

rdDevs.getElem('#link').addEventListener('click', 
    function(event) {
        event.preventDefault()
        console.log(event.clientY)
        console.log(event.clientX)
        console.log(event)
    })

let inputKeyPress = rdDevs.getElem("#input-key-press")
inputKeyPress.addEventListener("keypress", function(event) {
    if(event.keyCode == 13) {
        alert('enviar form')
    }
})

// let modal = rdDevs.getElem('#exampleModal')
// let overlay = rdDevs.getElem('.modal-backdrop')

// setTimeout(function(){
//     overlay.style.opacity = '0.5'
//     modal.setAttribute('class', 'modal fade show')
//     modal.style.display = 'block'
// }, 4000)



// contador = 0
// let intervalo = setInterval(function() {
//     contador++
//     if(contador == 3) {
//         clearInterval(intervalo)
//     }
//     alert('opa')
// }, 1000);

let irDownload = rdDevs.getElem('.ir-download')
let fazerDownload = rdDevs.getElem('.fazer-download')
let aguarde = rdDevs.getElem('.aguarde')
let segundos = rdDevs.getElem('.segundos')

irDownload.addEventListener('click', function() {
    this.style.display = 'none'
    aguarde.style.display = 'block'
    let inter = setInterval(function() {
        segundos.textContent--
        if (segundos.textContent == 0) {
            clearInterval(inter)
            aguarde.style.display = 'none'
            fazerDownload.style.display = 'block'
        }
    }, 1000);
})



