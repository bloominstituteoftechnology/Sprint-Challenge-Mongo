const mongoose = require('mongoose');
const Expense = require('../models/expense.js');

module.exports = expenseCreate = (req, res) => {
  const { amount, description, budget, category} = req.body;
  const newExpense = new Expense({amount, description, budget, category});

  newExpense
    .save()
    .then((createdExpense) => {
      res.status(200).json(createdExpense)
    })
    .catch((err) => {
      res.status(422).json(err)
    })
}

module.exports = allExpenses = (req, res) => {
  Expense.find()
    .then((all) => {
      res.status(200).json(all)
    })
    .catch((err) => {
      res.status(422).json(err)
    })
}