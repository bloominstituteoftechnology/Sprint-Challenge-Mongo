const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, 'Please include an amount on your expense'],
    min: [1, 'The expense amount must be greater than 0']
  },
  description: {
    type: String,
    required: [true, 'Please include a description for your expense'],
    minlength: [1, 'Please include a description for your expense'],
    maxlength: [128, 'The expense description may not exceed 128 characters']
  },
  budget: {
    type: ObjectId,
    required: [true, 'Please include an id for the budget that this expense belongs to'],
    ref: 'Budget'
  },
  category: {
    type: ObjectId,
    required: [true, 'Please include an id for the category that this expense belongs to'],
    ref: 'Category'
  }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;