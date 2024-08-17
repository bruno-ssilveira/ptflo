// Coleção dinâmica de pares chave:valor
    const produto = new Object
    produto.nome = 'Cadeira'
    produto['marca do produto'] = 'Generica'
    produto.preco = 220

    console.log(produto)
    delete produto.preco
    delete produto['marca do produto']
    console.log(produto)

// ESTRATEGIAS DE CRIACAO DE OBJETO
//usando notação literal
const obj1 = {}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998, 0.25)
console.log(p1getPrecoComDesconto(), p2.getPrecoComDesconto())

