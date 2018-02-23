const Expense = require('../models/Expense');

const createExpense = expenseInfo => {
  return new Expense(expenseInfo).save();
};

const getExpenses = (budgetId = '') => {
  return Expense.find({ budget: budgetId }).populate('budget category');
};

module.exports = { createExpense, getExpenses };
