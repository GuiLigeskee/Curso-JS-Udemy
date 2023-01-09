//exercício sobre Number e Math (06/12/2022)

const numero = prompt('Digite um número:')
document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5} </br>`;
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}</br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}</br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}</br>`
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}</br>`
document.body.innerHTML += `Com duas casas decimais: ${'(não consegui usar o toFixed!)'}`