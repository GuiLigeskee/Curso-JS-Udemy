// Classes (25/02/2023)

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`) // funções dentro de class já vai direto pro prototype
    }

    comer() {
        console.log(`${this.nome} está comendo`) // funções dentro de class já vai direto pro prototype
    }

    beber() {
        console.log(`${this.nome} está bebendo`) // funções dentro de class já vai direto pro prototype
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Pessoa2.prototype.falar = function() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Guilherme', 'Ligeski Saldanha')
console.log(p1)

const p2 = new Pessoa2('Barbara', 'Ligeski Saldanha')
console.log(p2.falar())