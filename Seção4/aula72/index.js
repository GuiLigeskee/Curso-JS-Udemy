//closures
 function retornaFuncao() {
    const nome = 'Guilherme';
    return function () {
        return nome;
    };
 }

 const funcao = retornaFuncao();