function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res') 

    if(fAno.value.length == 0 || fAno.value > ano){

        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {

        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'Mjovem.png')
            } else if ( idade < 60){
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebe-menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'Fjovem.png')
            } else if ( idade < 60){
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            } 
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}