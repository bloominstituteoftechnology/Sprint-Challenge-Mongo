const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    budget: { type: mongoose.Schema.Types.ObjectId, ref: 'Budget' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = ExpenseModel;