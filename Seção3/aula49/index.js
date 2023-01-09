// + diferemças entre var e let / const   (15/12/2022)

/*const verdadeira = true;

// Let tem escopo de bloco {....bloco}
// Var  só tem escopo de função 
let nome = 'Luiz';//criando
let nome2 = 'Luiz';//criando

if(verdadeira){
    let nome ='Otávio'//criando
    var nome2 = 'Rogério';//redeclarada
  //console.log(nome, nome2);
  if(verdadeira){
    var nome2 = 'Ronaldo'//redeclarada
    let nome = 'Outra coisa'//criando
  }  
}*/

// Let pode ser criado com mesmo nome em escopos(blocos) diferentes

/*function falaOi(){
    var nome = 'Luiz'; //variaveis declaradas dentro de funções só são definidas para tal função e não para o escopo global
}
console.log(Luiz)
falaOi()*/

/*console.log(sobrenome);

var sobrenome = 'Miranda'; //se a var for chamada antes de declarada se torna undefined*/

/*console.log(sobrenome);

let sobrenome = 'Miranda' // já com let isso da erro*/