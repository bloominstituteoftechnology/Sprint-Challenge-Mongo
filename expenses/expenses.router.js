const express = require('express');

const Expense = require('./Expense.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

routerFactory = myFactory.routerFactory(router, Expense);

// Define Projection for the Model
routerFactory.setProjection({
  amount: 1,
  description: 1,
  budget: 1,
  budgetUnique: 1,
  category: 1,
  categoryUnique: 1,
  _id: 0,
});

// Set Paths to be populated
routerFactory.setPopulate('budget', 'category', { budgetUnique: 'title budgetAmount -_id' });

module.exports = router;
