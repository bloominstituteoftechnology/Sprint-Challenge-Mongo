const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expenses = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: ObjectId,
        ref: 'Budgets'
    },
    category: {
        type: ObjectId,
        ref: 'Categories'
    }
})

module.exports = mongoose.model('Expenses', Expenses);