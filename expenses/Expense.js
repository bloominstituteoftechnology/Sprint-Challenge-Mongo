const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
  description: { type: String, default: 'Miscellaneous', required: true },
  amount: { type: Number, default: 0, required: true },
  budget: { type: ObjectId, ref: 'Budget', required: true },
  category: { type: ObjectId, ref: 'Category', required: true },
});

module.exports = mongoose.model('Expense', Expense);
