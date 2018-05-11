const mongoose = require('mongoose');
const ObjectId = mongooese.Schema.Types.ObjectId;

const Budget = require('./budget');
const Category = require('./Category');

const expenseSchema = mongoose.Schema({
  amount: Number,
  description: String,
  budget: {
    type: ObjectId,
    ref: Budget
  },
  category: {
    type: ObjectId,
    ref: Category
  }
}); 

module.exports = mongoose.model('Expense', expenseSchema);
