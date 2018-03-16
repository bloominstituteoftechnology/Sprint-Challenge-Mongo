const express = require('express');

const Expense = require('../Models/ExpenseModel.js');

const expenseRouter = express.Router();

expenseRouter.get('/', (req, res) => {
  Expense.find({})
    .populate('budget category', 'budgetAmount title')
    .then(expenses => {
      res.status(200).json({ Expenses: expenses });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error displaying Budgets '});
    })
});

expenseRouter.post('/', (req, res) => {
  const { amount, description, budget, category } = req.body;

  const expense = new Expense({ amount, description, budget, category });
  expense.save()
    .then(savedExpense => {
      res.status(200).json({ SavedExpense: savedExpense });
    })
    .catch(error => {
      res.status(400).json({ error: 'Error Saving Expense' });
    })
});

module.exports = expenseRouter;