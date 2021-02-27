const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: [true, "Amount is required."]
    },
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    budget: {
        type: ObjectId,
        ref: 'Budget',
        required: [true, "Budget is required."]
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: [true, "Category is required."]
    }
})

const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = Expense