const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: {type: Number, require: true},
    description: {type: String, require: true},
    budget: [{type: ObjectId, ref: 'Budget', require: true}],
    category: [{type: ObjectId, ref: 'Category', require: true}]
});

module.exports = mongoose.model('Expense', Expense);