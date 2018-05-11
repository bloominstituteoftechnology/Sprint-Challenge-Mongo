const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
// const id = new ObjectId


const Expense = new mongoose.Schema({
    amount: Number,
    description: String,
    budget: {
        type: ObjectId,
        ref: "Budget",
        index: true
    }, // Monthly Spending
    category: {
        type: ObjectId,
        ref: "Category"
    } // Groceries
})

module.exports = mongoose.model('Expense', Expense);
