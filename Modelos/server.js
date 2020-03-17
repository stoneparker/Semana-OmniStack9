const express = require('express'); // importar express

const app = express();


app.use(express.json()); // é preciso avisar que as requisições (podem) virão no formato json

// se o usuário estiver na rota '/test', devolve essa mensagem
app.get('/test', (req, res) => {
    return res.json({ 
        message: "Hello World!"
    });
})

// req.query - acessar query params (para filtros)
app.post('/usersQ', (req, res) => {
    return res.json({ 
        idade: req.query.idade
    });
})

// req.body - acessar corpo da requisição (para adição e edição)
// não é necessário escrever como json, pois este já vem assim
app.post('/usersB', (req, res) => {
    return res.json(req.body);
})

// req.params - acessar route params (para edição e exclusão)
app.put('/users/:id', (req, res) =>{
    return res.json({ id: req.params.id })
});

app.listen(3004); // definição de porta onde server irá rodar
