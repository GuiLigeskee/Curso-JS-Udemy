// Métodos de instância e estáticos (25/02/2023);

class ControleRemoto {
    constructor(tV) {
        this.tV = tV;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância (referente ao controle1)
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático (referente a classe ControleRemoto)
    static trocaPilha() {
        console.log(`Ok, pilhas trocadas`)
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
console.log(ControleRemoto)