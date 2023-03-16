


let formulario = document.querySelector('form')

let cxnome = document.querySelector('#nome')
let cxidade = document.querySelector('#idade')
let cxpeso = document.querySelector('#peso')
let cxaltura = document.querySelector('#altura')
let cximc = document.querySelector('#resultadoimc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnenviar = document.querySelector('#btnenviar')
let btnlimpar = document.querySelector('btnlimpar')

btnenviar.addEventListener('click', function(e) {
    let nome = cxnome.value
    let idade = cxidade.value
    let peso = cxpeso.value
    let altura = cxaltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cximc.value = imc
    let sit = situacaodopeso(imc)
    aviso.textContent = sit
}

)