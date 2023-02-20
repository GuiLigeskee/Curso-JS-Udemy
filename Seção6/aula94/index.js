// Manipulando Prototypes (17/02/2023)

// const objA = {
//     chaveA: 'A',
//     // __proto__: Object.prototype
// }

// const objB = {
//     chaveB: 'B',
//     // __proto__: objA
// }

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);

// Outro exemplo

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumentaPreco = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
//p1.aumentaPreco(100);
// p1.desconto(25);
// console.log(p1);

// Objeto literal
const p2 = {
    nome: `Caneca`,
    preco: 10
}

Object.setPrototypeOf(p2, Produto.prototype)

// p2.desconto(20);
// console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 130
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 44
    }
});

p3.aumentaPreco(10)
//p3.desconto(50)
console.log(p3)

