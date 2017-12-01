const mongoose = require('mongoose');
const Budget = require('../models/budget');
const Expense = require('../models/Expense');
const Category = require('../models/category');
const statusCodes = require('../../common/statusCodes.js');
const { log, catchLog } = require('../../common/console.js');

const createExpense = (req, res) => {
  const { amount, description } = req.body;
  const { budget, category } = req.params;
  const newExpense = new Expense({ amount, description, budget, category });
  newExpense.save()
  .then((savedExpense) => {
    res.status(statusCodes.created).json(savedExpense);
  })
  .catch((err) => {
    res.status(statusCodes.userError).json({ error: err.message });
  });
};

const findExpense = (req, res) => {
  const { findID } = req.params;
  Expense.findById(findID)
  .populate('category', 'title')
  .populate('budget', ['title', 'budgetAmount'])
  .then((expense) => {
    res.json(expense);
  })
  .catch((err) => {
    res.status(statusCodes.userError).json({ error: err.message });
  });
};

const listExpenses = (req, res) => {
  Expense.find()
  .populate('category', 'title')
  .populate('budget', ['title', 'budgetAmount'])
  .then((expenses) => {
    res.json(expenses);
  })
  .catch((err) => {
    res.status(statusCodes.serverError).json({ error: err.message });
  });
};
/* eslint-disable no-console */
const budgetSummary = (req, res) => {
  const { id } = req.params;
  const summary = Expense.find({ 'budget._id': id })
  .aggregate([
    {
      $project: {
        totalExpenses: { $sum: '$amount' },
        budgetedAmount: { total: 'budget.budgetAmount' }
      }
    }
  ]);
  console.log('summary:', summary);
};

module.exports = {
  createExpense,
  findExpense,
  listExpenses,
  budgetSummary
};
