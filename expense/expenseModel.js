const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    budget: {
        type: ObjectId,
        ref: 'Budget',
    },
    category: {
        type: ObjectId,
        ref: 'Category',
    },
})

const expenseModel = mongoose.model('Expense', expenseSchema);
module.exports = expenseModel;