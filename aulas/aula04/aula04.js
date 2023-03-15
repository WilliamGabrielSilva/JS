/* arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10 ,20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

//Adicionar no final push = empurre
produtos.push('Açúcar', 'Trigo')
codigos.push(40, 50 ,60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

//Remover do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

//Adicionar no inicio unshift
produtos.unshift('Uva', 'Maçã')

//Remover do inicio shift
produtos.shift()

//Remover de uma posição especifica splice
//splice = emendar
//posição inicial,  quantos remover
codigos.splice(1, 3)

//Copiar Array slice = fatiar porção 
//posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

//Ver tamanho do Array length comprimento
//meses.length
//meses1.length
//meses2.length

//Spreed operator ...
let teste = [...produtos, 'Ovo', 'Pera']