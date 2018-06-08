const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;


const Expense = mongoose.Schema({
    amount: {
        type: Number,
        min: 0
    },
    description: { type: String },
    category: { type: ObjectId, ref: 'Category' },
    budget: { type: ObjectId, ref: 'Budget' },
})

module.exports = mongoose.model('Expense', Expense)