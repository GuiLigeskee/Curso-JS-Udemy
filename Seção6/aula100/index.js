// Factory Functions + Prototypes (22/02/2023);

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        },

    }

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: {value: sobrenome}
    })
}


const p1 = criaPessoa('Guilherme' , 'Ligeski Saldanha');
const p2 = criaPessoa('Maria', 'Fernanda')