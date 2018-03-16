const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: Number, required: true },
  budget: [{ type: objectId, ref: 'Budget' }],
  category: [{ type: objectId, ref: 'Category'}],
});

module.exports = mongoose.model('Expense', Expense);
