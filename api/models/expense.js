const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
const ExpenseSchema = new mongoose.Schema({
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

