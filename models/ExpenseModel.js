const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
   amount: Number,
   description: String,
   budgets: [{
      type: ObjectId,
      ref: 'Budget'
   }],
   categories: [{
      type: ObjectId,
      ref: 'Category'
   }],
});

module.exports = mongoose.model('Expense', ExpenseSchema);
