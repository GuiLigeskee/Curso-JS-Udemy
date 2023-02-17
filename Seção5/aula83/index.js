//concatenando Arrays (16/02/2023)


//MODO ERRADO!!!

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1 + a2;
// console.log(typeof a3); //junta os valores dos arrays e transforma em string (não é muito bom);

// JEITO CERTO!!!

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Guilherme')
// console.log(a3) //Além de concatenar arrays esternas pode-se criar arrays dentro da função (muito bom)

// OUTRO MODO!!!

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = [...a1, 'Luiz', ...a2]; // Modo um pouco mais trabalhoso.
// console.log(a3);