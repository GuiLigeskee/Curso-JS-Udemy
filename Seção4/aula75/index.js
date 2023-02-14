//Funções fabrica (Factory Functions) 14/02/2023

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 

        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
           valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },

        altura,

        peso,

        // Getter (utilizado aqui para transformar a function imc() em um atributo)
        get imc(){ 
            const indice = this.peso / (altura ** 2);
            return indice.toFixed(3);
        }

    };
}

const p1 = criaPessoa('Guilherme', 'Ligeski Saldanha', 1.85, 130);
p1.nomeCompleto = 'Barbara Ligeski Saldanha'
console.log(p1.nomeCompleto);