const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
  amount: { type: Number, require: true },
  description: { type: String, required: true },
  budget: { type: ObjectId, ref: 'Budgets', required: true },
  category: { type: ObjectId, ref: 'Categories', required: true }
});

module.exports = mongoose.model('Expenses', Expense);