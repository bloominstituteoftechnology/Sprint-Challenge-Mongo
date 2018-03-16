const mongoose = require('mongoose');
const objectID = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  budget: [{ type: objectID, ref: 'Budget' }],
  category: [{ type: objectID, ref: 'Category'}],
});

module.exports = mongoose.model('Expense', Expense);
