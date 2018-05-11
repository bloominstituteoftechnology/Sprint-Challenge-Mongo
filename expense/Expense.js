const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Type.ObjectId;

const Expense = mongoose.schema({
    amount: Number,
    description: String,
    budget: {
        type: ObjectId,
        ref: 'Budget'
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Expense', Expense, 'expenses');
