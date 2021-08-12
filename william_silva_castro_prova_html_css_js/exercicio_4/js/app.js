let elem = {
    getElem: elemento => document.querySelector(elemento),
    getElemId: elemento => document.getElementById(elemento),
    getElemAll: elemento => document.querySelectorAll(elemento),
    logElem: elemento => console.log(document.querySelector(elemento)),
    logElemAll: elemento => console.log(document.querySelectorAll(elemento))
}
function validate(nomeElemento, regex){
    let elemento=document.querySelector(('.'+nomeElemento))
    if(regex.test(elemento.value.trim())){
        document.querySelector('.'+nomeElemento+'-valid').style.display='block';
        document.querySelector('.'+nomeElemento+'-invalid').style.display='none';
        elemento.style.border='2px solid green';
        return
    }
    document.querySelector('.'+nomeElemento+'-valid').style.display='none';
    document.querySelector('.'+nomeElemento+'-invalid').style.display='block';
    elemento.style.border='2px solid red';
}
//validação CRM
let crm= elem.getElem('.crm')
let regexCrm= /[0-9]+/gm;
crm.addEventListener('blur',()=>{
    validate('crm', regexCrm)
})
//validação nome do medico
let nomeMedico = elem.getElem('.nome-medico')
let regexNome =/^[a-záàâãéèêíïóôõöúçñ ]+$/i;
nomeMedico.addEventListener('blur',()=>{
    validate('nome-medico', regexNome)
})
//validação Data da receita
function convt(dataIng) {
    let ano= dataIng.substring(0, 4)
    let mes= dataIng.substring(5, 7)
    let dia= dataIng.substring(8, 10)
    return (dia+'/'+mes+'/'+ano)
}
let dataNas=elem.getElem('.dta-receita')
let regexDataNas=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i;
dataNas.addEventListener('blur', ()=>{
    let elemento=document.querySelector('.dta-receita')
    if(regexDataNas.test(convt(elemento.value.trim()))){
        document.querySelector('.dta-receita-valid').style.display='block';
        document.querySelector('.dta-receita-invalid').style.display='none';
        elemento.style.border='2px solid green';
        return
    }
    document.querySelector('.dta-receita-valid').style.display='none';
    document.querySelector('.dta-receita-invalid').style.display='block';
    elemento.style.border='2px solid red';
    
})


