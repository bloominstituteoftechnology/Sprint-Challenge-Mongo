const mongoose = require('mongoose');

const Expense = require('../models/expense');

const getExpenses = (req, res) => {
  Expense.find({})
    .populate('budget')
    .populate('category')
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving expenses', err });
    });
};

const createExpense = (req, res) => {
  const expense = new Expense(req.body);

  expense
    .save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error createing expense', err });
    });
};

const getBudgetSummary = (req, res) => {
  const { id } = req.params;
  console.log(id);
};

module.exports = {
  getExpenses,
  createExpense,
  getBudgetSummary,
};
