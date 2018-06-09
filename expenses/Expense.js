const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const definition = {
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: [{type: ObjectId, ref: 'Budget', required: true}],
    category: [{type: ObjectId, ref: 'Category', required: true}]
}

const ExpenseSchema = mongoose.Schema(definition)
module.exports = mongoose.model('Expense', ExpenseSchema)