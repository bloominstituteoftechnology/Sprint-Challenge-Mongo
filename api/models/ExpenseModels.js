const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = mongoose.Schema({
  _id: ObjectId,
  amount: { type: Number, default: 0 },
  description: String,
  budget: { type: ObjectId, ref: 'BudgetModels' },
  category: { type: ObjectId, ref: 'CategoryModels' }
});

module.exports = mongoose.model('ExpenseModels', ExpenseSchema)
