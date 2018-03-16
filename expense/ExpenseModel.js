const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

require('../budget/BudgetModel.js');
require('../category/CategoryModel.js');

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  budget: {
    type: ObjectId,
    ref: 'Budget'
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
