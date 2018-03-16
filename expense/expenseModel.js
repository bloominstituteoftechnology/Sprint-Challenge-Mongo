const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: Number,
    description: {type: String, required: true},
    budget: { type: ObjectId, ref: 'Budgets'},
    category: { type: ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Expenses', Expense);