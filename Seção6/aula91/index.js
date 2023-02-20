/// defineProperty -> Getter e Setters (17/02/2023);

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, // configurável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Valor inválido!');
                return;
            }

            estoquePrivado = valor;
        }
    });
};

const p1 = new Produto('camiseta', 40, 8);
p1.estoque = 'jsdkafjlaksd';
console.log(p1.estoque);
