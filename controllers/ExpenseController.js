const express = require('express');
const Expense = require('../models/ExpenseModel.js');
const Budget = require('../models/BudgetModel.js');
const Category = require('../models/CategoryModel.js');

const expenseRouter = express.Router();

expenseRouter.post('/', (req, res) => {
  const expenseInfo = req.body;
  const expense = new Expense(expenseInfo);

  expense
    .save()
    .then(newExpense => {
      res.status(200).json(newExpense);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Error creating new Expense', error: err });
    });
});

expenseRouter.get('/', (req, res) => {
  Expense.find({})
    .populate('budget')
    .populate('category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error getting Expenses', error: err });
    });
});

module.exports = expenseRouter;
