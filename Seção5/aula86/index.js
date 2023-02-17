// Reduce -> reduzindo um array a um único elemento (16/02/2023);

const numeros = [5 , 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

//Some todos os Números
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     acumulador += valor;
//     return acumulador;
// }, 0)
// console.log(total)

//Retorne um Array com os pares (filter)
// const total = numeros.reduce((acumulador, valor) => {
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, [])
// console.log(total);

//Retorne um array com o dobro dos valores (map)
// const total = numeros.reduce((acumulador, valor) => {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, [])
// console.log(total);

// Retorne a pessoa mais velha:
const pessoas = [
    {nome: 'Guilherme', idade:'18'},
    {nome: 'Joelma', idade:'48'},
    {nome: 'Fabio', idade:'45'},
    {nome: 'Barbara', idade:'16'},
    {nome: 'Helena', idade:'72'},
    {nome: 'Antônio', idade:'77'}
];
const maisVelho = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, [])
console.log(maisVelho);