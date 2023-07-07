let txtnum = document.getElementById('nums')
let lista = document.querySelector('select#45lista')
let res = document.getElementById('res')
let valores = []


function eNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function emlista(n, l){
    if(l.indexOf(Number(n) != -1)){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(eNumero(num.value) && !emlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value}`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}