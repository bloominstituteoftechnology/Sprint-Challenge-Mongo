const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: '0001',
  },
  amount: {
    required: true,
    default: 1,
  },
  description: {
    type: String,
    required: true,
    default: 'Description',
  },
  budget: {
    type: String,
    default: 'Money spent in a month.',
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: 'Groceries',
  }
});

const ExpenseModel = mongoose.model('expense', ExpenseSchema);

module.exports = ExpenseModel;
