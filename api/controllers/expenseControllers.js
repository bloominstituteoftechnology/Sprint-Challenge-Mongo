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

module.exports = { createExpense, getExpenses, aggregateExpenses };
