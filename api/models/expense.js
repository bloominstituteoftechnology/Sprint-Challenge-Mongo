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
    ref: 'Account',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
