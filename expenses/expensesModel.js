const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: ObjectId,
    required: true,
    ref: 'Budget'
  },
  category: {
    type: ObjectId,
    required: true,
    ref: 'Category'
  }
});

module.exports = mongoose.model("Expense", Expense);