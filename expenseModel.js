const mongoose = require('mongoose');

const expenseSchema = new mongoose.schema ({

    
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: ObjectId,
        ref: 'Budget'
    },
    category: {
        type: OjectId,
        ref: 'Category'
    }
});

module.exports = mongoose.model('Expense', ExpenseModel)