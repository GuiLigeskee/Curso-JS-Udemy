//Funções construtoras (15/02/2023)

//Função construtora -> objetos  //Construtora -> Pessoa(new)
//Factory Function -> objetos  // fabrica -> criaPessoa()

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 1234556;
    const metodoInterno = function () {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(`${this.nome}: sou um método`)
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Guilherme', 'Ligeski Saldanha')

p2.metodo()

// Transformando o Script da calculadora com Factory Function para Função construtora; (minha tentativa)

function Calculadora() {
        this.display = document.querySelector('.display'),
        this.btnClear = document.querySelector('.btn-clear'),
        
        this.inicia() ;{
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter() ;{
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        };

        this.realizaConta() ;{
           let conta = this.display.value;
           
           try{
            conta = eval(conta);

            if(!conta){
                alert('conta inválida');
                return;
            }

            this.display.value = String(conta);
           }catch(e){
                alert('conta inválida');
                return;
           }
        };
        
        this.clearDisplay() ;{
            this.display.value = ''
        };

        this.apagaUm() ;{
            this.display.value = this.display.value.slice(0, -1)
        }


        this.cliqueBotoes() ;{
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-equ')) {
                    this.realizaConta();
                }
            });
        }

        this.btnParaDisplay(valor) ;{
            this.display.value += valor;
        }
}

const calculadora = new Calculadora;
calculadora.inicia();



