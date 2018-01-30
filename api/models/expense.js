const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = new mongoose.Schema({
    index: true, 
    amount: Number, 
    description: String, 
    budget: {type: ObjectId, ref: 'Budget'}, //Monthly Spending 
    category: {type: ObjectId, ref: 'Category'}, //Groceries
    });

module.exports = mongoose.model('Expense', ExpenseSchema);