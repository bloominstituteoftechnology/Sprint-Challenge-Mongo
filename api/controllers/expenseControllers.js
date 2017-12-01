const mongoose = require('mongoose');

const Expense = require('../models/Expense');
const Comment = require('../models/comment');

const STATUS_USER_ERROR = 422;

const expenseCreate = (req, res) => {
  const { title } = req.body;
  const newExpense = new Expense({ title });
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