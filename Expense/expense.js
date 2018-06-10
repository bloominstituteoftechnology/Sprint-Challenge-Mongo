const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

// One Budget to many expenses/ One expense to one category

const expenseDefinition = {
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
        ref: 'Budget',
    },
    category: {
        type: ObjectId,
        ref: 'Category',
    },
};

const expenseSchema = new mongoose.Schema(expenseDefinition);

module.exports = mongoose.model('Expense', expenseSchema);
