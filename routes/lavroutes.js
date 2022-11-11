const express = require('express');
const api = express.Router();
const lavcontroller = require('../controllers/lavcontroller');

api.post('/Lavadora/create', lavcontroller.createLavadora);
api.get('/Lavadora/get', lavcontroller.getLavadora);
api.get('/Lavadora/search/:id', lavcontroller.getSpecificLavadora);
api.put('/Lavadora/update/:id', lavcontroller.updateLavadora);
api.delete('/Lavadora/delete/:id', lavcontroller.deleteLavadora);

module.exports = api;