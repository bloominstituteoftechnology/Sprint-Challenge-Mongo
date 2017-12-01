const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = Schema ({
    amount: {
        Type: String,
        required: true
    },
    description: {
        tyep: String,
        required: true 
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'    
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);