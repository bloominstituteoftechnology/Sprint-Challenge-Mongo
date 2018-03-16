const express = require('express');
const ExpenseRouter = express.Router();
const Expense = require('./ExpenseModel');

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
    .populate('budget')
    .populate('category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({error: 'There was an error retrieving your expenses from the database'})
    })
});

module.exports = ExpenseRouter;