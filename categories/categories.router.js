const express = require('express');

const Category = require('./Category.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

myFactory.routerFactory(router, Category)('to_populate_1 to_populate_2');

module.exports = router;
