// Se refere às reservas

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({ // 'do que é formado nosso usuário', campos e tipos de campos
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, // "chave estrangeira" -> vc diz aonde está a referência
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, // "chave estrangeira" -> vc diz aonde está a referência
        ref: 'Spot'
    }
})

module.exports = mongoose.model('Booking', BookingSchema); // nome e o q está associado a ele