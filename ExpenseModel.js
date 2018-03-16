const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  amount: {
    type: Number,
    required: True,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: ObjectId,
    ref: 'Budget',
  },
  category: {
    type: ObjectId,
    ref: 'Category',
  }
})

module.exports = mongoose('Expense', Expense);