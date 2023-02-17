// Filter + Map + Reduce (16/02/2023);

const numeros = [5 , 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

//retorne a soma do dobro de todos os pares;
// -> filtrar pares;
// -> dobrar os valores;
// -> reduzir (somar tudo);

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);