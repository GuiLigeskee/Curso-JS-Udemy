//Modelo HTML e CSS para exercícios posteriores  (13/12/2022)

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('formulário náo enviado...')
    }
}

const valida = new ValidaFormulario()
