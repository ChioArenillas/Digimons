
const { getDigimons, loadData } = require('../controllers/digimonController');
const express = require('express');

const digimonsRouter = express.Router();
console.log("Digimons router loaded"); // <-- Esto confirma si Node lo carga

digimonsRouter.get('/', getDigimons);
digimonsRouter.get('/loadData', loadData);

module.exports = digimonsRouter;