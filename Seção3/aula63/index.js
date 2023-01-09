//tratando e lançando erros (try, catch, throw) (21/12/2022)

/*try {
console.log(naoExisto);
}catch(e) {
    console.log('naoExisto não existe.')
}*/

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números'); //mostrar erro
    }

    return x + y;
}
try{
    console.log(soma(1, 2));
}catch{
    console.log(error)
}