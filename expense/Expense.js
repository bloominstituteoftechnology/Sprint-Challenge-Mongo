const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
    // Insert Data Here
    amount: Number,
    description: String,
    budget: { type: ObjectId, ref: 'Budget'},
    category: { type: ObjectId, ref: 'Category'}
});

// Module Export
module.exports = mongoose.model('Expense', Expense);