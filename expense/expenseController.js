const express = require('express');
const ExpenseRouter = express.Router();
const Expense = require('./ExpenseModel');
const Budget = require('../budget/budgetModel');
// const Category = require('../category/categoryModel');

ExpenseRouter.post('/', (req,res) => {
  const ExpenseInfo = req.body;
  const newExpense = new Expense(ExpenseInfo);
  newExpense
    .save()
    .then(savedExpense => {
      res.status(200).json(savedExpense);
    })
    .catch(err => {
      res.status(500).json({error: 'There was an error saving your expense to the database'})
    })
})

ExpenseRouter.get('/', (req,res) => {
  Expense.find({})
    .populate('Budget')
    .populate('Category')
    .then(expenses => {
      console.log('expenses', expenses);
      Budget.find({})
        .then(budgets => {
          console.log('budgets: ', budgets);
          console.log(expenses._doc);
          const expense = {...expenses, budget: budgets};
          res.send(expense);
        })
      // res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({error: 'There was an error retrieving your expenses from the database'})
    })
});

module.exports = ExpenseRouter;