// Herança com classes (25/02/2023);

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        }
        this.ligado = false;
    }
};

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, modelo, cor, tela) {
        super(nome);
        this.modelo = modelo;
        this.cor = cor;
        this.tela = tela;
    }
}


const s1 = new Smartphone('Samsung', 'branco', 'Galaxy s21 ULTRA')
console.log(s1)

const s2 = new Tablet('Samsung', 'Tab s6 Lite', 'Grafite', 'Oled 10pol');
s2.ligar()
console.log(s2);