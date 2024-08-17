const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);

const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Caneta","preco": 7.50}',
]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const result = carrinho.map(paraObjeto).map(apenasPreco);
console.log(result);

Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const nums2 = [1, 2, 3, 4, 5];

// For com propósito
let resultado2 = nums2.map2(function(e) {
    return e * 2
});

console.log(resultado2);