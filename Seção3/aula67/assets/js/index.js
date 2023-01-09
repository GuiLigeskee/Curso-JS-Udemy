//Modelo HTML e CSS para exercícios posteriores  (13/12/2022)

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas= document.querySelector('.tarefas');

//cria um elemento li para colocar no site
function criaLi () {
    const li = document.createElement('li');
    return li;
}

//utilizando a tecla enter
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

//limpa o input text do site e fica focado após limpado
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText ='Apagar';
//    botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esta mensagem')
    li.appendChild(botaoApagar)
}

//coloca a tarefa no site
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}
//acionamento do botão
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//Botão apagar
document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas()
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(tarefas)

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();