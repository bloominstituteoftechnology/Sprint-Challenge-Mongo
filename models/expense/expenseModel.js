const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    ref: '',
  },
  amount: {
    type: Number,
  },
  description: {
    type: String,
  },
  budget: {
    type: ObjectId,
    ref: 'Budget',
  },
  category: {
    type: ObjectId,
    ref: 'Category',
  },
});

const expenseModel = mongoose.model('Expense', expenseSchema);

module.exports = expenseModel;
