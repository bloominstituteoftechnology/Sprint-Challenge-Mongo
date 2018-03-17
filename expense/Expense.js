const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = require('../category/Category.js');
const Budget = require('../budget/Budget.js');

const Expense = new mongoose.Schema({
  amount: {
    type: Number
  },
  description: {
    type: String
  },
  budget: {
    type: ObjectId,
    ref: 'Budget',
    required: true
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true
  }
});

module.exports = mongoose.model('Expense', Expense);
