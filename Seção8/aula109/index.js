// Métodos úteis para promisses (02/03/2023);

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('Caí no erro');
            return;
        } 

        setTimeout(() => {
            resolve(msg + ' - passei na promisse');
            return;
        }, tempo);
    })
}
// Promisse.all / Promisse.race / Promisse.resolve / Promisse.reject

const promisses = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(452312345 , 3000),
];

// Promise.all = retorna todas as promisses de uma vez;
// Promise.all(promisses).then(function(valor){
//     console.log(valor);
// }).catch(function(erro) {
//     console.log(erro);
// })

// Promise.race = retorna a promisse terminada mais rápida;
Promise.race(promisses).then(function(valor){
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
})