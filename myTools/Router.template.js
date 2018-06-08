const express = require('express');

const Model = require('./Model.model.js');

const myFactory = require('../RouterFactory/routerFactory');

const router = express.Router();

myFactory.routerFactory(router, Model)('to_populate_1 to_populate_2');

module.exports = router;
