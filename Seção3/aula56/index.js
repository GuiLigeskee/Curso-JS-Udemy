// Estrutura de repetição For of (16/12/2022)

//            012345678910
//const nome = 'Luiz Otávio';
const nome = ['Guilherme', 'Fabio', 'Joelma', 'Barbara']

for(let i = 0; i<nome.length; i++){        //for classico - Geralmente com interáveis (array ou strings)
    console.log(nome[i]);
}

console.log('*****');

for (let i in nome){
    console.log(nome[i]);  // For in - retorna o índice ou chave (strings, arrays ou objetos)
}

console.log('*****');

for (let valor of nome){
    console.log(valor);  // For of - retorna valor em si (iteráveis, arrays ou strings)
}

console.log('*****');

nome.forEach(function(el){ //jeitinho um pouco diferente (mas funciona)
    console.log(el)
});
