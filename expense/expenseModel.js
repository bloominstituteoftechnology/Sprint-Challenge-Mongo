const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;



const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
    },
    description: {
        type: String
    },
    category: {
        tyep: ObjectId,
        ref: 'Category'
    },
    budget: {
        type: ObjectId, ref: 'Budget'
    },
})


const expenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = expenseModel;