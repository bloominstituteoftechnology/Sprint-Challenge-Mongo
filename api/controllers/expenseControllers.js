const mongoose = require('mongoose');

const Expense = require('../models/expense')

const createExpense = (req, res) => {
  const { amount, description, budget, category } = req.body;
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save(newExpense, (err, savedExpense) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedExpense);
  })
};

const getExpenses = (req, res) => {
  Expense.find({})
    .exec()
    .then(expenses => {
      if (expenses.length === 0) throw new Error();
      res.json(expenses);
    })
    .catch(err => res.status(422).json(err));
};

module.exports = {
  createExpense,
  getExpenses
};