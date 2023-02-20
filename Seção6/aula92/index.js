// Métodos úteis para objetos (17/02/2023);

/*
Object.values; (retorna o valor da chave)
Object.entries; (retorna as chaves e os valores delas)
Object.assign(des, any); (copia um outro objeto);
Object.getOwnPropertyDescriptor(o, 'prop'); (usado para ver a descrição da propriedade);
... (spread); (copia um outro objeto);

//Já vimos
Object.keys (retorna as chaves);
Object.freeze (congela o objeto);
Object.defineProperties (define várias propriedades);
Object.defineProperty (define uma propriedade);
*/

// const produto = { nome: 'produto', preco: 1.8 };
// const caneca = {
//     ...produto,
//     material: 'porcelana'  // ... (spread)
// };

// const caneca = Object.assign({}, produto, {material: 'porcelana'})

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

const produto = { nome: 'produto', preco: 1.8 };
// console.log(Object.values(produto));

// console.log(Object.entries(produto));