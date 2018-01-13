const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        
    },
    description: {
        type: String,
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
