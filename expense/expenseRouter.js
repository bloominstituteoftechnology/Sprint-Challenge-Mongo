const express = require('express');
const Expense = require('./Expense.js');

const Category = require('../category/Category.js');
const Budget = require('../budget/Budget.js');

const expenseRouter = express.Router();

expenseRouter.post('/', (req, res) => {
  const expenseInfo = req.body;
  const expense = new Expense(expenseInfo);

  expense
    .save()
    .then(expense => {
      res
        .status(200)
        .json(expense);
    })
    .catch(err => {
      res
        .status(500)
        .json({ MESSAGE: 'Error saving expense', error: err });
    });
});

expenseRouter.get('/', (req, res) => {
  Expense.find({})
    .populate('category')
    .populate('budget')
    .then(expenses => {
      res
        .status(200)
        .json(expenses);
    })
    .catch(err => {
      res
        .status(500)
        .json({ MESSAGE: 'Error getting expenses', error: err });
    });
});

module.exports = expenseRouter;
