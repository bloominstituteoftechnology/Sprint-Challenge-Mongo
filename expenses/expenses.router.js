const express = require('express');

const Expense = require('./Expense.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

myFactory.routerFactory(router, Expense)('to_populate_1 to_populate_2');

module.exports = router;
