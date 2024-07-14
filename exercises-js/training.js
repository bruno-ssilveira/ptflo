console.log("testing");

// In Js are not distinguishment between an integer and a double/float
let idade = 31;
console.log(typeof 31);
console.log(typeof idade);
let salario = 4578.32;
console.log(typeof salario);

const constante = 3; //can't be modified
console.log(constante);

let stringTest = 'Js';
console.log('Escola '.concat(stringTest).concat('!'));

console.log(stringTest.replace('s', 'a'));

// Cria um array separando pelas virgulas
console.log('Ana,Maria,Pedro'.split(','));

// Para trazer elementos que não são String, dentro de uma String. `${}`
console.log(`1 + 1 = ${1 + 1}`);

// Uma arrowFunction aplicada a uma constante, para aplicar maiúsculo em todos caracteres escolhidos.
const up = texto => texto.toUpperCase();
let toUpper = "um texto qualquer";
console.log(up(toUpper));

// Traz um ou outro "nome ou desconhecido", mesma função do COALESCE no SQL.
let nome = '';
console.log(nome || 'Desconhecido.');

// Arrays
let arrayTest = [1, 2, 3];

console.log(arrayTest[1]);
arrayTest[3] = 4;
console.log(arrayTest[3]);
arrayTest[10] = 5;
console.log(arrayTest);
console.log(arrayTest.length);

//Inserindo dados no array
arrayTest.push({id: 3}, false, null, 'Bruno');
console.log(arrayTest);

//Removendo dados do array
console.log(arrayTest.pop()); //remove o último elemento
delete arrayTest[0]; //deleta o elemento de escolha.
console.log(arrayTest);

//Objects. objetos são chave:valor
const object1 = {};
object1.nome = 'Bruno';
object1.lvl = 24;
object1.class = 'Wizard Swordsman';
object1.spells = {};
object1.spells.fireSword = 'A enchanted sword with blue fire';
console.log(object1);

// null & undefined
    //null: um tipo definido, string, numeric, sei lá, que não tem valor, é vazio.
    //undefined: é indefinido, não foi iniciado.

// Function é o pai do JS
    // Função sem retorno
        function imprimirSoma(a, b){
            console.log(a + b);
        }; // foi passado dois parâmetros e irá imprimir a soma deles.

        imprimirSoma(2, 3);
        imprimirSoma(2);

    // Função com retorno
        function soma(a, b = 0){
            return a + b;
        }; // Posso já definir um valor fixo para o parâmetro caso ele não for declarado.

    // Armazenar função em variável
        const imprimirSoma = function (a, b){
            console.log(a + b);
        };
        imprimirSoma(2, 3);

    // Armazenando uma função arrow em uma variável
        const soma = (a, b) => {
            console.log(a + b);
        }; // => = function // arrow function => é quase a mesma coisa de escrever 'function'
        soma(2, 3);
    
    // retorno implícito
        const somas = (a, b) => a - b; // quando a função vai ter apenas uma linha, pode ser escrita assim, sem o bloco de chaves.
        console.log(somas(3, 2));

{
    {
        {
            {
                {
                    {
                        {
                            var umdois = 12;
                        }
                    }
                }
            }
        }
    }
}
console.log(umdois);

let numero = 1;
{
    let numero = 2;
    console.log(numero); //2
};
console.log(numero); //1

for(var i = 0; i < 10; i++){
    console.log(i);
    console.log('count: ', i);
};
console.log('count: ', i);

for(let b = 0; b < 11; b++){
    console.log(b);
};
console.log(b);

// Operador Ternário
    const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
    console.log(resultado(7));

// Tratamento de erro
    function tratarErroELancar(erro){
        throw new Error('Erro no sistema');
    };

    function imprimirNome(obj){
        try{
            console.log(obj.name.toUpperCase());
        } catch(e){
            tratarErroELancar(e);
        } finally{
            console.log('final');
        }
    };

    const obj = {nome: 'Bruno'};
    imprimirNome(obj);

// Estruturas if-else
    Number.prototype.entre = function(inicio, fim){
        return this >= inicio && this <= fim;
    };

    const imprimirResultado = function(nota){
        if(nota.entre(9, 10)){
            console.log("Quadro de Honra");
        } else if(nota.entre(7, 8)){
            console.log("Aprovado");
        } else if(nota.entre(5, 6.99)){
            console.log("Recuperação");
        } else{
            console.log("Reprovado");
        };
    };

    imprimirResultado(8);
    imprimirResultado(9);
    imprimirResultado(6);
    imprimirResultado(4);

// Estrutura Switch
    const ResultPrint = function(nota){
        switch(Math.floor(nota)){
            case 10: case 9:
                console.log("Honor")
                break
            case 8: case 7:
                console.log("Hon")
                break
            case 6: case 5:
                console.log("H")
                break
            default:
                console.log("dead")
        };
    };

    ResultPrint(8);

// Estrutura While
    function minMax(min, max){
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    };

    let opcao = 0;

    while(opcao != -1){
        opcao = minMax(-1, 10);
        console.log(`Opção escolhida foi ${opcao}.`);
    };
    console.log('Finalizado!');


// For In
    const pessoa = {
        nome: 'Bruno'
        ,sobrenome: 'Silveira'
        ,age: 23
    };

    for(let x in pessoa){
        console.log(`${x} = ${pessoa[x]}`);
    }; // o 'x' sem o let é caracterizado como uma variável, então é correto aplicar o 'let' para ficar só dentro do escopo da função

