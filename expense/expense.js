const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: ObjectID,
    required: true,
  },
  category: {
    type: ObjectID,
    required: true,
  },
});

const ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = ExpenseModel;