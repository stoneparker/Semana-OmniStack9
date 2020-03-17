const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ // 'do que é formado nosso usuário', campos e tipos de campos
    email: String
})

module.exports = mongoose.model('User', UserSchema); // nome e o q está associado a ele