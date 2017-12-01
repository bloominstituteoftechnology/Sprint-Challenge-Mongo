const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = require('./category');

const ExpenseSchema = Schema({
    amount: Number,
    description: String,
    budget: {
      type: Schema.Types.ObjectId,
      ref: 'Budget'  
    }, //monthly spending
    category: [CategorySchema] //groceries
});

module.exports = mongoose.model('Expense', ExpenseSchema);