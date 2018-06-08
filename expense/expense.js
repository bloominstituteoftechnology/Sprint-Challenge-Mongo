const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
    amount: Number,
    description: String,
})

module.exports = mongoose.model('Expense', Expense);