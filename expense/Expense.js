const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    //link to budget
    budget: [{ type: ObjectId, ref: 'Budget'}], // Monthly Spending
    //link to category
    category: [{ type: ObjectId, ref: 'Category'}] // Groceries
})

module.exports = mongoose.model('Expense', Expense);