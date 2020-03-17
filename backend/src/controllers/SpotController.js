// req de upload já é identificada como file
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech }); // exibindo os spots com a tech que veio na query

        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) { // caso usuário não seja encontrado, um erro é devolvido
            return res.status(400).json({ error: "User doesn't exists" }) 

        } 
        const spots = await Spot.create({ 
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()) // map para remover os espaços em branco antes e dps das vírgulas em cada uma das techs
        })
        return res.json(spots)
    }
}