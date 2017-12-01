const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
