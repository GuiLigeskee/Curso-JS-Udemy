// Escreva uma função que receba 2 números e retorne o maior deles (19/12/2022)

function meuEscopo(){
    const n1 = 12398;
    const n2 = 98431;

    const resultado = (n1, n2) => n1 > n2 ? `O maior número é o ${n1}` : `O maior número é o ${n2}`

    console.log(resultado(n1, n2));

    /*function numMax(n1, n2) {
        return n1 > n2 ? `O maior número é o ${n1}` : `O maior número é o ${n2}`;
    }
    console.log(numMax(n1, n2))*/
}
meuEscopo()