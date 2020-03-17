const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({ // 'do que é formado nosso usuário', campos e tipos de campos
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, // "chave estrangeira" -> vc diz aonde está a referência
        ref: 'User'
    }
}, { // passar algumas configurações por aqui
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual('thumbnail_url').get( function() {
    return `http://192.168.15.14:3004/files/${this.thumbnail}`;
})

module.exports = mongoose.model('Spot', SpotSchema); // nome e o q está associado a ele