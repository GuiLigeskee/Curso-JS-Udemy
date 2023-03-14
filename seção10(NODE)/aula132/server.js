const express = require('express');
const app = express();

// CRUD -> create, read, update, delete.
//         POST    GET   PUT     DELETE
    

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar formulário</button>
    </form>
    `);
});

// tratando o body;
app.use(express.urlencoded({ extended:true }))

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.idUsuario);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});


// req.params = /profiles/324;
// req.query = /profiles/?idUsuario=12436&nome=Guiligeskee;
// req.
