const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    HorasUso: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Ususario', UserSchema);