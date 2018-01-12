const mongoose = require('mongoose');
const ObjectId = Schema.Types.ObjectId;
const ExpenseSchema = new mongoose.Schema({
  index: true,
  amount: Number,
  description: String,
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
})
module.exports = mongoose.model('Expense', ExpenseSchema)

