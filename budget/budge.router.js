const express = require('express');

const Budget = require('./Budget.model.js');

const myFactory = require('../RouterFactory/routerFactory');

const router = express.Router();

myFactory.routerFactory(router, Budget)('to_populate_1 to_populate_2');

module.exports = router;
