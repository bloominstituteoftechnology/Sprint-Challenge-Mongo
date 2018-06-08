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
  },
  category: {
    type: ObjectId,
    required: true,
  }
});

module.exports = mongoose.model("Expense", Expense);