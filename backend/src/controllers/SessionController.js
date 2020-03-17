// Tudo o que tem a ver com login, logout -> sessões
// métodos: index (listagem), show (listar um), store (criar um), update (alterar), destroy (remover) 

const User = require('../models/User');

module.exports = {
    async store(req, res) { // criação de uma sessão
        const { email } = req.body; // mesma coisa de email = req.body.email

        let user = await User.findOne({ email });

        // se usuário não foi encontrado, cria um usuário com esse e-mail
        if (!user) 
            user = await User.create({ email }); 

        return res.json(user);
    }
};