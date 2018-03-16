const express = require('express');

const Budget = require('../Models/BudgetModel.js');
const Expense = require('../Models/ExpenseModel.js');

const budgetRouter = express.Router();

budgetRouter.post('/', (req, res) => {
  const { title, budgetAmount } = req.body;

  if (!title || !budgetAmount) {
    res.status(500).json({ error: 'Title and BudgetAmount Required!'});
  }

  const budget = new Budget({ title, budgetAmount });
  budget.save()
    .then(savedBudget => {
      res.status(200).json({ BudgetSaved: savedBudget });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error saving new Budget'})
    })
});

module.exports = budgetRouter;