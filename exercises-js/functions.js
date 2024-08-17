// Criar de forma literal
    function fun1() {};

// Armazenar em uma variável
    const fun2 = function() {};

// Armazenar em um array
    const array = [function(a, b) {return a + b}, fun1, fun2];
    console.log([array[0](2, 3)]);

// Armazenar em um atributo de um objeto
    const obj = {};
    obj.falar = function() {return 'Opa'};
    console.log(obj.falar());

// Passar função como parametro
    function run(fun) {
        fun();
    };
    run(function() {console.log('Execute')});

// Uma função pode retornar/conter uma função
    function soma(a, b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
    soma(2, 3)(4);
    //or
    const somaMais = soma(2, 3);
    somaMais(4);

// Parametros e Retorno são opcionais (?nao usar?)

// Parâmetros variáveis
    function soma() {
        let soma = 0
        for(i in arguments) {
            soma += arguments[i]
        }
        return soma
    };

// Parâmetro padrão
    function soma3(a = 1, b = 2, c = 3) {
        return a + b + c;
    };
    console.log(soma3(1, 4));

// 'this' pode variar

// 'this' e a função bind #01
    const pessoa = {
        saudacao: 'Bom dia!',
        falar() {
            console.log(this.saudacao)
        }
    };
    pessoa.falar();

    const falar = pessoa.falar;
    falar(); // conflito entre paradigmas: funcional e OO

    const falar2 = pessoa.falar.bind(pessoa);
    falar2(); // neste caso o bind assegura uma referência direta a pessoa
                // do contrario o this muda de escopo


// 
    function Pessoa() {
        this.idade = 0

        setInterval(function() {
            this.idade++
            console.log(this.idade)
        }.bind(this), 1000)
    }
    new Pessoa;


// Arrow Function #1
    dobro = (a) => {
        return 2 * a
    };

    dobro = a => 2 * a // implicit return (quando se tem só um parametro pode chamar assim)
    console.log(dobro(Math.PI));

    ola = () => 'Olá';
    console.log(ola())
    ola2 = () => console.log('Olá');
    ola2();

// Arrow Function #2
    pessoa = () => {
        this.idade = 0

        setInterval(() => {
            this.idade++
            console.log(this.idade)
        }, 1000)
    }
    pessoa(); // using arrow function the 'this' don`t varia

// Arrow Function #3

// Funções Anônimas (sao funcoes sem nome)
        const soma = function(x, y) {
            return x + y;
        };

        const imprimirResultado = function(a, b, operacao = soma) {
            console.log(operacao(a, b));
        };

        imprimirResultado(3, 4);
        imprimirResultado(3, 4, function(x, y) {
            return x - y;
        });
        imprimirResultado(3, 4, (x, y) => x * y); // Arrow function será sempre anônima, não tem como dar nome para uma.

// Funções Callback #01
        const fabricators = ["Mercedes", "Audi", "BMW"];

        function print(a, b) {
            console.log(`${b + 1}. ${a}`);
        };

        fabricators.forEach(print);
        fabricators.forEach(function(a) {
            console.log(a);
        });
        fabricators.forEach((a) => console.log(a));

// Funções Callback #02
    const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
    const notasBaixas1 = []
    for(let i in notas) {
        if(notas[i] < 7) {
             notasBaixas1.push(notas[i]);
         };
     };
     console.log(notasBaixas1)

// Com callback
    const notasBaixas2 = notas.filter(function(nota) {
         return nota < 7
    })
    console.log(notasBaixas2);
    
    const notasBaixas3 = notas.filter(nota => nota < 7);
    console.log(notasBaixas3);

// Funções Construtoras
    function Carro(velocidadeMaxima = 200, delta = 5) {
        //atributo privado
        let velocidadeAtual = 0

        //metodo publico
        this.acelerar = function () {
            if(velocidadeAtual + delta <= velocidadeMaxima) {
                velocidadeAtual =+ delta
            }
            else {
                velocidadeAtual = velocidadeMaxima
            }
        }

        //metodo publico
        this.getVelocidadeAtual = function() {
            return velocidadeAtual
        }
    }

    const uno = new Carro;

    uno.acelerar();
    console.log(uno.getVelocidadeAtual());

    const ferrari = new Carro(400,30);
    ferrari.acelerar();
    console.log(ferrari.getVelocidadeAtual());

// Tipos de Declaração
    //function declaration
        function soma(x, y) {
            return x + y;
        };

    //function expression
        const soma2 = function(x, y) {
            return x + y;
        };

    //named function expression
        const mult = function mult(x, y) {
            return x * y;
        };

// Contexto Léxico
    
// Closure

// Função Factory (função que quando chamada cria um novo objeto)
        function criarPessoa(x, y, z) {
            return {
                nome: x,
                idade: y,
                sexo: z
            };
        };
        console.log(criarPessoa('bruno', 24, 'masculino'));

// Classe vs Função Factory
    class Pessoa {
        constructor(nome) {
            this.nome = nome;
        };

        falar() {
            console.log(`Meu nome é ${this.nome}`);
        };
    };

    const p1 = new Pessoa('João');
    p1.falar();

    const criarPessoa = nome => {
        return {
            falar: () => console.log(`Meu nome é ${nome}`)
        }
    };

    //funcao factory
    function criaPessoa(nome) {
        this.nome = nome

        this.falar = function() {
            console.log(`Meu nome é ${this.nome}`)
        }
    };
    const p = new criaPessoa('Bruno');
    p.falar();

// IIFE -> Immediately Invoked Function Expression
    //para fugir do escopo global, não ter risco
        //de manipularem o código
            //sempre interessante tentar fugir do escopo global, como criar funções dessa forma.
            (function() {
                console.log('Será executado na hora!')
                console.log('Foge do escopo mais abrangente!')
            })();

// Call & Apply
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
    }

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 49000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))

/*
um assunto interessante que acontece dentro do Javascript que é a comparação entre números em formato string.

Abaixo temos uma cadeia de string de números.

const cadeia_de_strings = '1, 2, 3, 4, 5, 6, 7, 8, 9'
Se pegarmos alguns dos valores da cadeia de strings e fizermos a comparação entre nossas strings de número até o nove, ela mantem um comportamento normal. Como se estivéssemos comparando números.

'1' > '2'
//output : false
'1' > '1'
//output : false
'2' > '1'
//output : true
'4' > '2'
//output : true
Agora se compararmos os valores depois do nove, a comparação irá validar o primeiro número da cadeia numeral, validando sua ordem alfabética. Por exemplo:

'2' > '12'
//output : true
'5' > '42'
//output : true
'3' > '29'
//output : true
Com isso, podemos ver que não é uma abordagem muito boa comparar números em formato de string.
*/

