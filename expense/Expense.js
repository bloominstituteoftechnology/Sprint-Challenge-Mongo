const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: {type: Number, required: true},
    description: {type: String, required: true},
    budget_id: [Number],
    category_id: [Number],
    budgets: [{type: ObjectId, ref: 'Budget', required: true}],
    categories: [{type: ObjectId, ref: 'Category', required: true}]
});

module.exports = mongoose.model('Expense', Expense);