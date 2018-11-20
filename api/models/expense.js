const mongoose = require('mongoose');
const Category = require('./category.js');
const Budget = require('./budget.js');

const ExpenseSchema = new mongoose.Schema ({
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);