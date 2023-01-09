//exercício lógico (06/10/2022)
let varA = 'A';//tenha valor de varB
let varB = 'B';//tenha valor de varC
let varC = 'C'; //tenha valor de varA

//resolução simples

const varA2 = varA;
const varB2 = varB;
const varC2 = varC;

varA = varB2;
varB = varC2;
varC = varA2;

console.log(varA, varB, varC)


/*resolução diferenciada

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
*/