const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: ObjectId.Schema,
    auto: true,
    required: true
  },
  category: {
    type: ObjectId.Schema,
    auto: true,
    required: true
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
