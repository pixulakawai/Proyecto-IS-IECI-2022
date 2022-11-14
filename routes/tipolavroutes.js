const express = require('express');
const api = express.Router();
const tipolavcontroller = require('../controllers/tipolavcontroller');

api.post('/tipolavadora/create', tipolavcontroller.createTipolavadora);
api.get('/tipolavadora/get', tipolavcontroller.getTipolavadora);
api.get('/tipolavadora/search/:id', tipolavcontroller.getSpecificTipolavadora);
api.put('/tipolavadora/update/:id', tipolavcontroller.updateTipolavadora);
api.delete('/tipolavadora/delete/:id', tipolavcontroller.deleteTipolavadora);

module.exports = api;
