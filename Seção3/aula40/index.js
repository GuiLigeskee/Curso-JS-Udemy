// if , else if , else   (13/12/2022)
/*
    IF pode ser usado sozinho
    Sempre que utilizo a palavra else, precisa de um IF antes
    Eu posso ter vários ELSE IFs na checagem
    Só posso ter um ELSE na checagem
    Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE
*/

let hora = 19;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite')
} else {
    console.log('Não é um horário válido')
}