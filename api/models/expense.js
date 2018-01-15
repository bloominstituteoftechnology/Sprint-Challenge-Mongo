const mongoose = require('mongoose');
mongoose.Promise = Promise;

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
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category',
        required: true,
    },
    
});
module.exports = mongoose.model('Expense', ExpenseSchema);
