const elementos = [
    { tag: 'p', texto: 'Qualquer coisa que você quiser.' },
    { tag: 'div', texto: 'Frase2' },
    { tag: 'footer', texto: 'Frase3' },
    { tag: 'section', texto: 'Frase4' },
];

const container = document.querySelector('.container')
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto;
    div.appendChild(tagCriada)
}

container.appendChild(div)