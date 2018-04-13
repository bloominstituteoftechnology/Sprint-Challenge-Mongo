const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const Budget = require('../budgets/Budget');
const Category = require('../categories/Category');

const Expense = new Schema({
  amount: {
    type: Number,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  budget: {
    type: objectId,
    ref: 'Budget'
  },
  category: {
    type: objectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Expense', Expense);
