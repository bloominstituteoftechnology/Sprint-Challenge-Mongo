const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = mongoose.Schema({
  _id: ObjectId,
  amount: Number,
  description: String,
  budget: {type: ObjectId, ref: 'BudgetModel'}
});

module.exports = mongoose.model('ExpenseModels', ExpenseSchema)
