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
  // console.log('budgetSummary id:', id);
  let budgetAmount;
  Budget.findById(id)
  .exec()
  .then((budget) => {
    // console.log('budget:', budget);
    budgetAmount = budget.budgetAmount;
  })
  .catch(err => res.status(statusCodes.userError).json({ error: `not found: ${err}` }));

  Expense.aggregate(
    { $group: {
      _id: '$budget', totalExpenses: { $sum: '$amount' }
    } }
  )
  .exec()
  .then((summary) => {
    // console.log('summary.totalExpenses:', summary[0].totalExpenses);
    // console.log('budgetedAmount:', budgetAmount);
    // console.log('summary', summary);
    res.json({ budgetDelta: (budgetAmount - summary[0].totalExpenses) });
  })
  .catch(err => res.status(statusCodes.serverError).json({ error: err.message }));
};
const expenseGroupBy = (req, res) => {
  const { aggregatedBy } = req.query;
  if (aggregatedBy === undefined || aggregatedBy === null || !aggregatedBy.length) {
    res.status(statusCodes.userError).json({ error: 'must provide an aggregatedBy' });
  }
  const by = `$${aggregatedBy}`;

  Expense
  .aggregate(
     { $group: { _id: by, total: { $sum: '$amount' } } },
     { $sort: { total: -1 } }
  )
  .exec()
  .then(value => res.json(value))
  .catch(err => res.status(statusCodes.serverError).json({ error: err.message }));
};


module.exports = {
  createExpense,
  findExpense,
  listExpenses,
  budgetSummary,
  expenseGroupBy
};
