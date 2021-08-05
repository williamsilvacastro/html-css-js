// 1
var n1 = 1;
var n2 = -1;
var n3 = 0.2;
var n4 = "churrasqueira";
var n5 = true;
// 2
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
// 3
var nome ="William";
var sobreNome="Silva";
var nomeCompleto = nome+""+sobreNome;
console.log(nomeCompleto);
// 4
// var nome = "Clara";
// console.log(Nome);
// 5
var nome = "Clara";
console.log(nome, sobreNome);
// 6
// var texto= "william silva castro 
// gosta de churrasco";
// console.log(texto)
// 7
var valorNulo= null;
var naodefinido= undefined;
console.log(valorNulo);
console.log(naodefinido);
// 8
var frutas=["mamao","abacaxi", "uva", "maça", "pessego"];
console.log(frutas);
// 9
var textoRd= "RD Está aqui agora!"
// 10
var nomeDeCasado="william silva"
var casado=[nomeDeCasado, false];
console.log(!casado[1]);
// 11
var casado=[nomeDeCasado, true];
console.log(!casado[1]);
// 12
var nota = 10
switch (nota){
    case 10:
    case 9:
        console.log("Melhores alunos")
    break;
    case 8:
    case 7:
        console.log("Muito Bom")
    break;
    case 6:
    case 5:
        console.log("Ufa voce passou")
    break;
    case 4:
        console.log("Recuperacao")
    break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado!")
    break;
    default:
        console.log("nota invalida")
}