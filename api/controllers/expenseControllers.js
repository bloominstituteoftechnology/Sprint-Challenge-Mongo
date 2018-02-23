const mongoose = require('mongoose');
const Expense = require('../models/expense');

const createExpense = (req, res) => {
  const expenseInfo = req.body;
  const { amount, description, budget, category } = req.body;
  const expense = new Expense(expenseInfo);

  if (!amount || !description || !budget || !category) {
    res.status(500).json({error: 'You must provide the amount, description, budget, and category for each expense.'});
  } else {
    expense.save()
      .then(addedExpense => {
        res.status(200).json(addedExpense);
      })
      .catch(error => {
        res.status(500).json({error: 'There was a problem adding the new expense.'});
      })
  }
};

const expenses =  (req, res) => {
  Expense.find()
    .populate('budget category', 'title budgetAmount')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json({error: 'There was a problem getting all of your expenses.'});
    })
};

module.exports = {
  createExpense,
  expenses
}