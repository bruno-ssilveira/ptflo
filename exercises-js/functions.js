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
    