// Getters e Setters (25/02/2023)

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Guilherme', 'Ligeski');
p1.nomeCompleto = 'Guilherme Ligeski Saldanha'
console.log(p1.nome);
console.log(p1.sobrenome);