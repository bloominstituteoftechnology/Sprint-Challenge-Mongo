const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({

    amount: {
        type: Number,
        required: true,
        unique: true,

    },
        description: {
        type: String,
        required: true,
        unique: true,
    },
    budget: {
        type: Number,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        unique: true,

    }


});

const options = {
    timestamps: true,
};


const expenseModel = mongoose.model('Expense', expenseSchema, 'expense');

module.exports = expenseModel('Expense', expense);