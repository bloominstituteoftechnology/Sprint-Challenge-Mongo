const mongoose = require('mongoose');

const Expense = require('../models/Expense');

const STATUS_USER_ERROR = 422;

const expenseCreate = (req, res) => {
  const { amount, description, budget, category } = req.body;
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save()
    .then((createdExpense) => {
      res.json(createdExpense);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
};

const expenseList = (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) {
      res.status(500).json(err);
    }
    res.json(expenses);
  });
};


module.exports = {
  expenseCreate,
  expenseList,
};