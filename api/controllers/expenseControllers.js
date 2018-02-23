const Expense = require('../models/Expense');

const createExpense = expenseInfo => {
  return new Expense(expenseInfo).save();
};

const getExpenses = _ => {
  return Expense.find().populate('budget category');
};

module.exports = { createExpense, getExpenses };
