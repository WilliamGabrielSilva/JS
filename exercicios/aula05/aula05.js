/* Arquivo JS aula 05 objetos */

// Criar objeto
let pessoa = {
    nome : 'William',
    idade : 15,
    peso : 68.1,
    altura : 1.68,
    doador : false,
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
}

// como acessar uma propriedade usando .
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
*/

// Acessar propriedade usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// Operação IMC = peso / (altura * altura)
// let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(X)
// limita o numero de casas decimais 
// console.log('IMC ' + imc.toFixed(2))

// Alterar/Atualizar valor de propriedade
//produtos.descricao = ['Arroz']
//produtos.preco = ['4.99']

// Usando spreed operator
//produtos.descricao = [...produtos.descricao, 'Feijão']
//produtos.preco = [...produtos.preco, '9.99']

// Usando o spreed oparator em objetos const
//carros.marca = [...carros.marca, 'WV']
//carros.modelo = [...carros.modelo, 'Fusca']
//carros.ano = [...carros.ano, '1997']