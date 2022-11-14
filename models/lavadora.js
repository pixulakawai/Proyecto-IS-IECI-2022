const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LavadoraSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    tipo: {
        type: Schema.ObjectId,
        ref: 'Tipolavadora'
    },
    usohoras: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Lavadora', LavadoraSchema);