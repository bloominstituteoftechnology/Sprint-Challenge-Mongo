const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
    amount: Number,
    description: String,
    spending: [{ type: ObjectId, ref: 'Budget' }],
    groceries: [{ type: ObjectId, ref: 'Category' }]
})

module.exports = mongoose.model('Expense', Expense);
