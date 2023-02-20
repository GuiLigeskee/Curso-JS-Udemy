//Object.defineProperty() - Object.defineProperties() (17/02/2023);


function Produto(nome, preco, estoque) {

    
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //valor da chave
            writable: true, //alterar o valor
            configurable: false // configurável
        },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //valor da chave
            writable: true, //alterar o valor
            configurable: true // configurável
        },
    });
    Object.defineProperty(this, 'estoque', {
        enumerable: false, //mostra a chave
        value: estoque, //valor da chave
        writable: false, //alterar o valor
        configurable: false // configurável
    });
};

const novoProduto = new Produto('Camiseta', 60, 3);
console.log(novoProduto);