const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
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
    ref: 'Expense'
  },
  category: {
    type: ObjectId,
    ref: 'ObjectId'
  }
});
module.exports = mongoose.model('Expense', Expense);
