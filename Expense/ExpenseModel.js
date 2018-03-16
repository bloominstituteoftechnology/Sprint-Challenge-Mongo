const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: { type: String },
  budget: {
    type: ObjectId,
    ref: 'Budget'
  }, // Monthly Spending
  category: {
    type: ObjectId,
    ref: 'Catagory'
  } // Groceries
});

module.exports = mongoose.model('Budget', ExpenseSchema);
