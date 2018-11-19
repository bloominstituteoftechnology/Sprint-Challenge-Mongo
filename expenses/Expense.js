const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const Expense = new mongoose.Schema({
    amount: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    budget: { type: ObjectId, ref: 'Budget', required: true },
    category: { type: ObjectId, ref: 'Category', required: true },
})

module.exports = mongoose.model('Expense', Expense)