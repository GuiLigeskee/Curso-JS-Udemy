// Revisão do básico em Arrays (16/02/2023)

// valor por referência
//                 0         1        2 
// const nomes = [ 'Eduardo', 'Maria', 'João' ];
// nomes[2] = 'Joana';
// delete nomes[2];
// console.log(nomes);

//const nomes = new Array('Eduardo', 'Maria', 'João') (Array contrutora);

//rest operator

// const nomes = [ 'Eduardo', 'Maria', 'João' ];
// const novo = [ ...nomes ]; //rest operator ...

//remover elementos

// const nomes = [ 'Eduardo', 'Maria', 'João' ];
// //const removido = nomes.pop(); //pop() -> remove o ultimo elemento do array
// const removido = nomes.shift(); //shift() -> remove o primeiro elemento do array e passa os outros para trás;
// console.log(nomes, removido);

//adicionar elementos

// const nomes = [ 'Eduardo', 'Maria', 'João' ];
// nomes.push('Guiliherme'); //push() adiciona elemento ao final do array;
// nomes.unshift('Barabara'); //unshift() adiciona elemento ao começo do array;
// console.log(nomes)

//Fatiar o Array

//                    1         2         3           4         5        6  
// const nomes = [ 'Fabio', 'Joelma', 'Barbara', 'Guilherme', 'Susy', 'Jade' ];
// const humanos = nomes.slice(0, 4);
// console.log(nomes, humanos);

//Separar nomes

// const nome = 'Guilherme Ligeski Saldanha';
// const nomes = nome.split(' '); // split() -> Separa uma string em empaços, vírgulas, pontos, letras, etc...
// console.log(nomes);


// const nomes = [ 'Guilherme', 'Ligeski', 'Saldanha' ]
// const nome = nomes.join(' '); //join() -> Junta os elementos do array;
// console.log(nome);
