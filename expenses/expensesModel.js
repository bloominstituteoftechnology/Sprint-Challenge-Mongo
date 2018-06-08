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
  budgets: {
    type: ObjectId,
    ref: "Budget"
  },
  categories: {
    type: ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model("Expense", Expense);