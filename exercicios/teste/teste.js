function clicar() {
    var a = window.document.getElementById('button')
    a.innerHTML = 'Clicou!'
    a.style.backgroundColor = 'red'
}
function entrou() {
    var click = window.document.getElementById('button')
    click.innerHTML = 'Entrou!'
    click.style.backgroundColor = 'black' 
    click.style.color = 'white' 
}
function saiu() {
    var saiu = window.document.getElementById('button')
    saiu.innerHTML = "saiu!"
    saiu.style.backgroundColor= 'green'
}