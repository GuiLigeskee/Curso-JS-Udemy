//As várias maneiras de declarar funções em JS (23/01/2023)

//fist-class objects (Objeto de primeira classe)

//declaração de função (Function hoisting) -- a função pode ser declarada antes ou depois de ser chamada que não vai dar erro;
falaOi();

function falaOi(){
    console.log('Oie')
};

//Funcrion expression
const souUmDado = function(){
    console.log('Sou um dado.')
} 
souUmDado()

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Dentro de um objeto 
const obj = {
    falar(){
        console.log('Estou falando...')
    }
};
obj.falar();