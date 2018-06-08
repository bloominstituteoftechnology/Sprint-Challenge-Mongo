const mongoose = require('mongoose');

const Expense = new mongoose.Schema({
  _id: ObjectId,
  amount: Number,
  description: String,
  // links
  budget: {
    type: ObjectId,
    ref: 'Budget'
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  }
});
module.exports = mongoose.model('Expense', Expense);