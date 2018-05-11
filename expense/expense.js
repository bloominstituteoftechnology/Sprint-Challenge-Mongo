const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    budget: { type: ObjectId, ref: 'Budget', required: true }, //*******LINK TO BUDGET********
    category: { type: ObjectId, ref: 'Category', required: true }, //***********LINK TO CATEGORY*****
});

module.exports = mongoose.model('Expense', Expense);