const mongoose = require('mongoose'); //used to simplify syntax 
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
    },
    budget: {
        type: ObjectId,
        ref: 'Budget' 
    }, 
    category: {
        type: ObjectId, 
        ref: 'Category'
    }
});

const ExpenseModel = mongoose.model('Expense', Expense);

module.exports = ExpenseModel; 