const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },

    description: String,

    budget: [
        {
            type: ObjectId,
            ref: 'Budget'
        }
    ],

    category: [
        {
            type: ObjectId,
            ref: 'Category'
        }
    ]
});

module.exports = mongoose.model('Expense', Expense);