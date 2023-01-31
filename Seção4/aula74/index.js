//funções imediatas (IIFE -> Immediately invoked funcrion expression) (30/01/23);
function qualquerCoisa() { //função normal possuí acesso ao escopo global
    console.log(1123324123);
}
qualquerCoisa();

(function(){ //função imediata não toca no escopo global (muito segura)
    const nome = 'Guilherme';
    console.log(nome);
}) ()//declarando a função IIFE pelo '()';

const nome = 'Qualquer coisa'