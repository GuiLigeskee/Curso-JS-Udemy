// Herança (20/02/2023);

// Produto => aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// função construtora de camiseta;
function Camiseta(nome,preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//Linkando o prototype de Produto em camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return
            estoque = valor;
        }
    })
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('regata' , 45, 'branca');
const caneca = new Caneca('Caneca do homem aranha', 15, 'porcelana', 12);

console.log(produto);
console.log(camiseta);
console.log(caneca);