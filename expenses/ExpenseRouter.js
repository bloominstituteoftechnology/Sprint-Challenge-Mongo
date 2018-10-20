const express = require('express');

const Expense = require('./ExpenseModel.js');

const ExpenseRouter = express.Router();

ExpenseRouter.post('/', (req, res) => {
  Expense.create(req.body)
    .then(expense => res.status(201).json(expense))
    .catch(err => res.status(500).json(err));
});

ExpenseRouter.get('/', (req, res) => {
  Expense.find({})
    .populate('budget', 'title budgetAmount')
    .populate('category', 'title')
    .then(expenses => res.status(200).json(expenses))
    .catch(error => res.status(500).json(error));
});

module.exports = ExpenseRouter;
