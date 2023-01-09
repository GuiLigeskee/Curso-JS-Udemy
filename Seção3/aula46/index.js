//Objeto Date (14/12/2022)

/*  //fazer operação nas datas

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia);
console.log(data.toString())

*/


/*  //mostrar data específica

const data = new Date('2004-11-08 18:30')
console.log(data.toString())

*/
/*
const data = new Date('2004-11-08 18:30')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Mil', data.getMilliseconds());
*/
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours()
    const min = data.getMinutes();
    const seg = data.getSeconds()
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg};`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)