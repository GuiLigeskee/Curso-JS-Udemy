// Filter filtrar arrays (16/02/2023);

//filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

// EXEMPLOS DE FILTER:

// Retorne os números maiores que 10:
const numeros = [5 , 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
 const numFiltrados = numeros.filter(valor => valor >10 );
 console.log(numFiltrados);

// Retorne as pessoas que tem o nome com 7 letras ou mais
const pessoas = [
    {nome: 'Guilherme', idade:'18'},
    {nome: 'Joelma', idade:'48'},
    {nome: 'Fabio', idade:'45'},
    {nome: 'Barbara', idade:'16'},
    {nome: 'Helena', idade:'72'},
    {nome: 'Antônio', idade:'77'}
];
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
console.log(nomeGrande)

// Retorne as passoas com mais de 60 anos
const idosos = pessoas.filter(obj => obj.idade > 60)
console.log(idosos);

// Retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.endsWith('a'))
console.log(nomeTerminaComA);