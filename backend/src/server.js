const express = require('express'); // importar express
const routes = require('./routes'); // colocar o caminho relativo para ele não entender que é um módulo tentando ser referenciado
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // lidar com caminhos

const app = express();

mongoose.connect('mongodb+srv://vitoria:vitoria@omnistack-ebcf9.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, // instruções padrões apenas para não mostrar avisos no cmd
});

app.use(cors());
app.use(express.json()); // é preciso avisar que as requisições (podem) virão no formato json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); // retornar arquivos estáticos (pdf, img...)
app.use(routes);

app.listen(3004);
