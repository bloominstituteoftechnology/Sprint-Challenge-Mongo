const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

// Expense Schema for post 
const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }, 
    description: {
        type: String,
        required: true
    },
    category: [{type: ObjectID, ref: 'expenseController'}],
    budget: [{type: ObjectID, ref: 'budgetController'}]  
})



const expenseModel = mongoose.model('Expense', ExpenseSchema);
module.exports = expenseModel;