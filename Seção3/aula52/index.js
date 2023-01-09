// Laço For (15/12/2022)

/*
console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')   //jeito errado
console.log('Linha 3')
console.log('Linha 4')
*/

for (let nlinha = 0; nlinha <= 10; nlinha++) {  //jeito certo ultilizando laço for
    const par = nlinha % 2 === 0; 
    console.log(`linha ${nlinha}`, par === true ? 'par' : 'ímpar')
}
