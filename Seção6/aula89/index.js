// revisando Objetos (17/02/2023);

//Objeto literal

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Ligeski Saldanha',
    idade: 18
};

console.log(pessoa.nome) //notação de ponto;
console.log(pessoa['sobrenome']) //notação de colchetes;

//Objeto construtor

const pessoa1 = new Object();
pessoa1.nome = 'Guiliherme';
pessoa1.sobrenome = 'Ligeski Saldanha';
pessoa1.idade = 18;
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento())

//Factory functions e Contructor functions e Classes retornam --Objetos--
