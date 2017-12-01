const mongoose = require('mongoose');
// const Budget = require('../models/budget');
// const Category = require('../models/category');

const Schema = mongoose.Schema;

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    unique: true,
    required: true
  },
  budget: {
    type: Schema.Types.ObjectId,
    ref: 'Budget'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
