const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    budget: {
        type: ObjectId, 
        ref: 'Budget'
    },
    categories: {
        type: ObjectId,
        ref: 'Categories'
    }
});

module.exports = mongoose.model('Expense', Expense);