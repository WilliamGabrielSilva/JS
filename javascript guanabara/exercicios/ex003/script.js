function contar(){
    let res = document.getElementById('res')

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'

    } else {
        res.innerHTML = 'Contando: <br>'
        if (p <= 0){
            window.alert('passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){

            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {

            for(let c = i; c > f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}
