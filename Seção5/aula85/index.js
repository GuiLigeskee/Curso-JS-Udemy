// Map -> Mapear o Array (16/02/2023);

//Map -> modifica o valor da array com uma função para ela

// dobre os numeros:
const numeros = [5 , 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
numDobrados = numeros.map(valor => valor * 2)
console.log(numDobrados);

// Retore apenas uma string com o nome da pessoa:
const pessoas = [
    {nome: 'Guilherme', idade:'18'},
    {nome: 'Joelma', idade:'48'},
    {nome: 'Fabio', idade:'45'},
    {nome: 'Barbara', idade:'16'},
    {nome: 'Helena', idade:'72'},
    {nome: 'Antônio', idade:'77'}
];
const nomePessoa = pessoas.map(obj => obj.nome);
console.log(nomePessoa);


// Remova apenas a chave "nome" do objeto;
const delNome = pessoas.map(obj => ({ idade: obj.idade }));
console.log(delNome);

// Adicione uma chave id em cada objeto;
const id = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
})
console.log(id);
console.log(pessoas)