const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: String,
    description: String,
    budget_id: [Number],
    category_id: [Number],
    budgets: [{type: ObjectId, ref: 'Budget'}],
    categories: [{type: ObjectId, ref: 'Category'}]
});

module.exports = mongoose.model('Expense', Expense);