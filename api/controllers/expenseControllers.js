const Expense = require('../models/Expense');

const createExpense = expenseInfo => {
  return new Expense(expenseInfo).save();
};

const getExpenses = _ => {
  return Expense.find().populate('budget category');
};

const aggregateExpenses = _ => {
  return Expense.aggregate([
    { $group: { _id: '$budget', expensesSum: { $sum: '$amount' } } },
  ]);
};

const getExpensesOf = budget => {
  return Expense.find({ budget }).populate('budget category');
};

const aggregateExpensesBy = field => {
  return Expense.aggregate([
    {
      $group: {
        _id: '$category',
        totalExpenses: { $sum: '$amount' },
      },
    },
  ]).sort('-totalExpenses');
};

module.exports = {
  createExpense,
  getExpenses,
  aggregateExpenses,
  getExpensesOf,
  aggregateExpensesBy,
};
