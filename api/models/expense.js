const mongoose = require('mongoose');
const Budget = require('./budget.js');
const Category = require('./category.js');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Budget',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category',
    },
    
});
module.exports = mongoose.model('Expense', ExpenseSchema);
