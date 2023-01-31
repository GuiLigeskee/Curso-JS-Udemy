//Escopo léxico

const nome = 'Luiz';

function falaNome() {
    const nome = 'Otávio';
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();