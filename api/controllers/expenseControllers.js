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

module.exports = {
  createExpense,
  getExpenses,
  aggregateExpenses,
  getExpensesOf,
};
