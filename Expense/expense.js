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
        ref: 'budgetModel',
    },
    category: {
        type: ObjectId,
        ref: 'categoryModel',
    },
};

const expenseSchema = new mongoose.Schema(expenseDefinition);

const expenseModel = mongoose.model('Expense', ExpenseDefinition, 'Expenses');

module.exports = expenseModel;
