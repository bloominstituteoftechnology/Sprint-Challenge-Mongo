const mongoose = require('mongoose');

const Expense = require('../models/expense');

const makeExpense = (req, res) => {
  const { amount, description, budget, category } = req.body;
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save(newExpense, (err, expense) => {
    if (err) {
      res.status(500).json({ '!E': err });
    }
    res.json({ 'New expense': expense });
  });
};
const returnExpenses = (req, res) => {
  Expense.find({})
    .then(expenses => {
      if (expenses.length === 0 || expenses === null) {
        throw new Error();
      }
      res.json(expenses);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ '!E': err });
    });
};

module.exports = {
  makeExpense,
  returnExpenses
};
