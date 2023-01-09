// Break e continue (16/12/2022)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of numeros) {

    if(numero === 2){
        console.log('pulei o 2')
        continue;        //pula para a próxima interação
    }
    
    if(numero === 7){
        console.log('7 encontrado, saindo...')
        break
    }
    console.log(numero)
}