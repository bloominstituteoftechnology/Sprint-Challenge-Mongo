const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ExpenseSchema = new mongoose.Schema({
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
    ref : 'budget'
  },
  category: {
    type: ObjectId,
    ref: 'category'
  }
});

module.exports = mongoose.model('expense', ExpenseSchema);