// Modules(2) (08/03/2023)

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo`)
    }
};