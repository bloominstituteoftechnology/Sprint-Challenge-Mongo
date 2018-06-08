const express = require('express');

const Expense = require('./Expense.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

routerFactory = myFactory.routerFactory(router, Expense);
routerFactory.setPopulate('budget', 'category');
routerFactory.setProjection({
  amount: 1,
  description: 1,
  _id: 0,
  budget: 1,
  category: 1,
});

module.exports = router;
