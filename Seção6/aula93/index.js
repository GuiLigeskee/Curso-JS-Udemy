// Prototypes (17/02/2023);


// Construtora -> molde (classe)
// function Pessoa(nome,sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // Desta maneira, essa função é recriada a cada nova pessoa (fica uma aplicação muito mal otimizada)
// };

// // Intância
// const pessoa1 = new Pessoa('Guilherme', 'L.') // <- Pessoa = Função construtora
// const pessoa2 = new Pessoa('Maria', 'S.') // <- Pessoa = Função construtora.

// console.log(pessoa1);
// console.log(pessoa2);

//UTILIZANDO PROTOTYPE

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome; 
};

Pessoa.prototype.nomeCompleto = function () {
    return this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Guilherme', 'L.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'S.') // <- Pessoa = Função construtora.

console.log(pessoa1);
console.log(pessoa2);






