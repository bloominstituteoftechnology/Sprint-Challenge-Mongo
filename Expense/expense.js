const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: Number, required: true },
  budget: [{ type: objectID, ref: 'Budget' }],
  category: [{ type: objectID, ref: 'Category'}],
});

module.exports = mongoose.model('Expense', Expense);
