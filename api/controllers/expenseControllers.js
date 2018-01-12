const mongoose = require('mongoose');
const Expense = require('../models/expense');

const createExpense = (newExpense) => {

  return new Expense(newExpense).save();

};

const getExpenses = () => {

  return Expense.find({});

};

module.exports = {
  createExpense,
  getExpenses
};