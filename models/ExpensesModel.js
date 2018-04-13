const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expenses = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: [{ type: ObjectId, ref: 'Budget' }], // Monthly Spending
  category: [{ type: ObjectId, ref: 'Category' }], // Groceries
});

module.exports = mongoose.model('Expenses', Expenses);
