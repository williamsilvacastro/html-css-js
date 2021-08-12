let elem = {
    getElem: elemento => document.querySelector(elemento),
    getElemId: elemento => document.getElementById(elemento),
    getElemAll: elemento => document.querySelectorAll(elemento),
    logElem: elemento => console.log(document.querySelector(elemento)),
    logElemAll: elemento => console.log(document.querySelectorAll(elemento))
}
elem.getElem(".comprimentar").onclick=(()=>{
    window.alert("olá")
})
elem.getElem(".changebackground").onclick=(()=>{
    setTimeout(() => {
        document.querySelector('body').setAttribute("style", "background-color: green")
    }, 1);
    
})
elem.getElem(".imagem").addEventListener("mouseover",event=>{
    console.log("estou vendo a imagem")
    
    console.log(event.clientY)
    console.log(event.clientX)
    console.log(event)
})
elem.getElem(".imagem2").addEventListener("click",()=>{
    console.log ('estou clicando na imagem')
})
function fundoVermelho(){
    this.style.backgroundColor="red"
}
document.querySelector('body').addEventListener("click",fundoVermelho)
// document.querySelector('body').removeEventListener("click",fundoVermelho)
let btnEnviar = elem.getElem(".btn-Enviar")
btnEnviar.addEventListener('click', function(event){
    event.preventDefault()
    alert('Não é possível enviar')
})
document.querySelector('body').onload=setTimeout(()=>{
    alert("tempo esgotado")
}, 10000)

setInterval(()=>{
    alert("hora do intervalo")
},5000)