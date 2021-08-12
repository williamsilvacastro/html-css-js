let vet =[1000, 800, 500]
function mostrarPremio(posicao){
    if(posicao>=1&&posicao<=3){
        console.log(vet[posicao-1])
        return
    }
    console.log("sem premio")
}
mostrarPremio(1)
mostrarPremio(2)
mostrarPremio(3)
mostrarPremio(4)
mostrarPremio(5)
mostrarPremio(0)
mostrarPremio(-1)
mostrarPremio(-2)
