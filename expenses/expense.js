const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseMod = {
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: [{type: ObjectId, ref: 'Budget'}],
    category: [{type: ObjectId, ref: 'Category'}]
}
const ExpenseSchema = mongoose.Schema(expenseMod)
module.exports = mongoose.model('Expense', ExpenseSchema);