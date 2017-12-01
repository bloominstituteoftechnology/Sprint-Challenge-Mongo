const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  amount: Number,
  description: String,
  budget: {
    type: Schema.Types.ObjectId,
    ref: 'Budget'
  },
  category: {
    type: Schema.Types.ObjectID,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
