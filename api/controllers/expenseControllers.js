const mongoose = require('mongoose');

const Expense = require('../models/expense');

const createExpense = (req, res) => {
  const { amount, description, account, category } = req.body;
  const newExpense = new Expense({ amount, description, account, category });
  newExpense.save((err, expense) => {
    if (err) {
      res.status(422).json(err);
    }
    res.json(expense);
  });
};

const getExpenses = (req, res) => {
  Expense.find({})
    .populate('account', 'category')
    .exec((err, expenses) => {
      if (err) {
        res.status(422).json(err);
      }
      res.json(expenses);
    });
};

module.exports = {
  createExpense,
  getExpenses,
};
