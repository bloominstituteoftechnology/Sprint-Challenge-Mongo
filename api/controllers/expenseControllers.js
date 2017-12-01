const mongoose = require('mongoose');

const Expense = require('../models/expense');

const STATUS_USER_ERROR = 422;

const createExpense = (req, res) => {
  const { amount, description, budget, category } = req.body;
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save((err, createdExpense) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
      return;
    }
    res.json(createdExpense);
  });
};

const listExpenses = (req, res) => {
  Expense.find({}, { _id: 0, __v: 0 })
    .populate({ path: 'budget' })
    .populate({ path: 'category' })
    .exec()
    .then(expense => {
      if (expense === null) throw new Error();
      res.json(expense);
    })
    .catch(err => res.status(422).json(err));
};

module.exports = {
  createExpense,
  listExpenses,
};
