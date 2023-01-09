//Atribuição via destruturação (Objetos)  (15/12/2022)

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Alves',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 330 //quando acaba não coloca vírgula , .
    }
};
/* // atribuição normal
const nome = pessoa.nome
console.log(nome);
*/

// atribuição via desestruturação
const {endereco: {rua, numero, casa: casa = 1}, endereco } = pessoa;
console.log(rua, numero,casa, endereco)
