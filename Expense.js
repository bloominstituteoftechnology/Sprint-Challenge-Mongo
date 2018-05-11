const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Expense = new mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String },
    budget: [{ type: ObjectId, ref: 'Budget' }],
    category: [{ type: ObjectId, ref: 'Category'}]
})

const options = {
    timestamp: true
}

// const expenseSchema = new mongoose.Schema(definition, options);
module.exports = mongoose.model('Expense', Expense);