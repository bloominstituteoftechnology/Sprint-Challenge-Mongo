const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const expenseModel = new mongoose.Schema({
  description: String,
  amount: {
    type: Number,
    required: [true, 'Please provide the expense amount']
  },
  budget: {
    type: ObjectId,
    ref: 'Budget',
    required: [true, 'Please provide the id of the budget']
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: [true, 'Please provide the id of the category']
  }
});

module.exports = mongoose.model('Expense', expenseModel);