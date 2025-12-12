
const { getDigimons, loadData, getDigimonById, createDigimon, updateDigimon, deleteDigimon } = require('../controllers/digimonController');
const express = require('express');

const digimonsRouter = require('express').Router()

digimonsRouter.get('/', getDigimons)
//digimonsRouter.get('/loadData', loadData)
digimonsRouter.get('/:id', getDigimonById)
digimonsRouter.post('/', createDigimon)
digimonsRouter.put('/:id', updateDigimon)
digimonsRouter.delete('/:id', deleteDigimon)

module.exports = digimonsRouter;