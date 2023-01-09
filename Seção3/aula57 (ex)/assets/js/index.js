//Exercício com nodeList (Broswer)  (16/12/2022)

const paragrafos = document.querySelector('.paragrafos')//somente pega o primeiro elemento (paragrafo)
const paragrafoAll = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody)

for (let p of paragrafoAll){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white'
}