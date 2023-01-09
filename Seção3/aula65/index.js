//setInterval e setTimeOut (21/12/2022)

function mostraHora(){
    data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer);
}, 3000)

setTimeout(function(){
    console.log('Olá mundo!')
}, 5000)