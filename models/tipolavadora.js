const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TipolavadoraSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Tipolavadora', TipolavadoraSchema);