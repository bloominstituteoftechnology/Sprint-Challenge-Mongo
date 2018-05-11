const express = require('express');

const Budget = require('../Models/BudgetModel.js');
const Expense = require('../Models/ExpenseModel.js');

const budgetRouter = express.Router();

budgetRouter.get('/', (req, res) => {
    Budget.find({})
        .then(budgets => {
            res.status(200).json({ Budgets: budgets });
        })
        .catch(err => {
            res.status(500).json({ err: 'Error Displaying Budgets' });
        })
});

budgetRouter.post('/', (req, res) => {
    const { title, budgetAmount } = req.body;
  
    if (!title || !budgetAmount) {
        res.status(500).json({ err: 'Title and Budget Amount Required!'});
    }
  
    const budget = new Budget({ title, budgetAmount });
    budget.save()
        .then(savedBudget => {
            res.status(200).json({ BudgetSaved: savedBudget });
        })
        .catch(err => {
            res.status(500).json({ err: 'Error Saving New Budget'})
        })
});

module.exports = budgetRouter;