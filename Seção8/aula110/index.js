// Async / Await (02/03/2023)

function rand(min = 1 , max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor inválido');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

// utilizando async;

async function executa() {
    try {
        const frase1 = await esperaAi('Frase1', rand());
        console.log(frase1);
    
        const frase2 = await esperaAi('Frase2', rand());
        console.log(frase2);
        
        const frase3 = await esperaAi(32423513, rand());
        console.log(frase3);
    
        console.log('terminei na', frase3);
    } catch(e) {
        console.log(e);
    };
    
};

executa()







// esperaAi('Frase1', rand()).then(valor => {
//     console.log(valor);
//     return esperaAi('Frase2', rand())
// }).then(fase => {
//     console.log(fase);
//     return esperaAi('Frase3', rand())
// }).then(fase => {
//     console.log(fase)
// }).then(fase => {
//     console.log('terminamos na frase: ', fase)
// }).catch(e => {
//     console.log(e)
// });