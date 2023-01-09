//Modelo HTML e CSS para exercícios posteriores  (13/12/2022)
function meuEscopo(){
    const form = document.querySelector('#form')

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        

    })
    
    function createP(className){
        const p = document.createElement('p');
        return p;
        
    }

    function setResult(msg){
        const resultado = document.querySelector('#result')
        resultado.innerHTML = '';
        const p = createP();
    }
   
    
    
    function calc(peso, altura){
        let result = Number(peso) / Number(altura) ** 2;
    }




}
meuEscopo();