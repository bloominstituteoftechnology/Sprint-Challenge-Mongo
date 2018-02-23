const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: Schema.Types.OjectId,
        ref: 'Budget',
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
});

module.exports = mongoose.model('Expense', ExpenseSchema);