//Atribuição via destruturação (Array)  (15/12/2022)

/*let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a, b, c] = numeros;//reatribuindo o valor das variaveis que ja foram declaradas

console.log(a, b, c);*/

/*//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const primeiroNumero = numeros[0]///jeito 'errado'
const [primeiroNumero , segundoNumero, ,quartoNumero, , ...resto] = numeros; //Atribuição via destruturação //... rest, ... spread
console.log(primeiroNumero, segundoNumero,quartoNumero, resto);*/

/*
//                   0          1          2   
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numeros;
console.log(lista2[1]);*/