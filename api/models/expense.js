const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = new mongoose.Schema({
    amount: Number,
    description: String,
    budget: [{ type: ObjectId, ref: 'Budget' }],
    category: [{ type: ObjectId, ref: 'Category' }]
});

module.export = mongoose.model('Expense', ExpenseSchema);