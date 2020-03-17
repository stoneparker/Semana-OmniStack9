// Perfil do usuário

const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) { // uno dashboard, não vários
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        return (res.json(spots));
    }
}