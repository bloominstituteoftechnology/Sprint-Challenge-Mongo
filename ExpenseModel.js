const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Category = require('./CategoryModel.js');
const Budget = require('./BudgetModel.js');


const Expense = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: ObjectId,
    ref: 'Budget',
    required: true,
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true,
  }
})

module.exports = mongoose.model('Expense', Expense);