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
        document.querySelector('.'+nomeElemento+'-certo').style.display='block';
        document.querySelector('.'+nomeElemento+'-incorreto').style.display='none';
        document.querySelector('.'+nomeElemento+'-erro').style.display='none';
        elemento.style.border='2px solid green';
        return
    }
    if(elemento.value.trim()==""){
        document.querySelector('.'+nomeElemento+'-erro').style.display='block'; 
        document.querySelector('.'+nomeElemento+'-incorreto').style.display='none';
        document.querySelector('.'+nomeElemento+'-certo').style.display='none';
        return
    }
    document.querySelector('.'+nomeElemento+'-erro').style.display='none';
    document.querySelector('.'+nomeElemento+'-certo').style.display='none';
    document.querySelector('.'+nomeElemento+'-incorreto').style.display='block';
}
//validação Nome
let nome=elem.getElem('.nome')
let regexNome= /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
nome.addEventListener('blur', ()=>{
    validate("nome", regexNome)
})
//validação CPF/CNPJ
let cpf=elem.getElem('.cpf')
let regexCpf=/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i;
cpf.addEventListener('blur', ()=>{
    validate('cpf', regexCpf)
})
//Validação data de Nascimento
let dataNas=elem.getElem('.dataNas')
let regexDataNas=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i;
dataNas.addEventListener('blur', ()=>{
    validate('dataNas', regexDataNas)
})
dataNas.addEventListener('keydown', ()=>{
    if(dataNas.value.trim().length === 2 || dataNas.value.trim().length === 5){
        dataNas.value=dataNas.value.trim()+'/'
    }
})
dataNas.addEventListener('keyup', ()=>{
    if(dataNas.value.trim().length>10){
        dataNas.value=dataNas.value.trim().substring(0, 10)
    }
})
//Validação Endereço
let endereco = elem.getElem('.endereco')
let regexEndereco =/([\w\W]+)\s(\d+)/i;
endereco.addEventListener('blur', ()=>{
    validate('endereco', regexEndereco)
})
//Validação Bairro
let bairro = elem.getElem('.bairro')
let regexBairro=/^[a-záàâãéèêíïóôõöúçñ ]+$/i;
bairro.addEventListener('blur',()=>{
    validate('bairro', regexBairro)
})
//Validação CEP
let cep = elem.getElem('.cep')
let regexCep=/([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/i;
cep.addEventListener('blur', ()=>{
    validate('cep', regexCep)
})
//validação municipio
let municipio = elem.getElem('.municipio')
let regexMunicipio = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
municipio.addEventListener('blur', ()=>{
    validate('municipio', regexMunicipio)
})
//validação telefone
let telefone = elem.getElem('.telefone')
let regexTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
telefone.addEventListener('blur', ()=>{
    validate('telefone', regexTelefone)
})
//validação celular
let celular = elem.getElem('.celular')
celular.addEventListener('blur', ()=>{
    validate('celular', regexTelefone)
})
//Inscrição estadual
let inscricao = elem.getElem('.inscricao')
let regexInscricao=/\d{4}.\d{4}.\d{4}.\d{4}/;
inscricao.addEventListener('blur', ()=>{
    validate('inscricao', regexInscricao)
})

//validação UF
let uf = elem.getElem('.unidade')
let regexUf=/^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/;
uf.addEventListener('blur', ()=>{
    validate('unidade', regexUf)
})