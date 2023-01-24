//Parametros da funcao (23/01/2023)

function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
};
funcao('Gui', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcao2(a, b = 2, c = 4){
    console.log(a + b + c);
}
funcao2(6, 2, 5);

//parametros de objetos

function funcao3({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao3({nome:'Guilherme', sobrenome:'Ligeski Saldanha', idade:18})

//parametros de arrays

function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao4(['Barbara', 'Ligeski Saldanha', 16])

//rest operator = ...
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('/', 1, 20, 30, 40, 50)


//não existe argument em arrow function!!!!

const contas = (...args) => {
    console.log(args);
};
contas(30, 40, 50)