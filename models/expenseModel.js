const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new Schema({
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
    ref: 'Budget',
    required: true
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true
  }
});

module.exports = mongoose.model('Expense', expenseSchema);