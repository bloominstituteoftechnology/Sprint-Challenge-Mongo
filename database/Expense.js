const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const Expense = new Schema({
  amount: { type: Number, required: true },
  description: String,
  budget: [{ type: Schema.Types.ObjectId, ref: 'Budget' }],
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

module.exports = model('Expense', Expense);