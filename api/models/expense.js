const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget'
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }]
})

module.exports = mongoose.model('Expense', ExpenseSchema);