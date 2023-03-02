// Promisses (02/03/2023);

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Valor inválido')

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

esperaAi('Frase1', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi(12343434, rand(1, 3)).then(resposta => {
        console.log(resposta);
        return esperaAi('Frase3', rand(1, 3)).then(resposta => {
            console.log(resposta)
        }).catch(e =>{
            console.log('Erro: ',e);
        })
    })
})
