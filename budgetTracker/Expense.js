const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    budget: {
        type: Object
    },
    category: {
        type: Object
    }

});


const expenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = expenseModel;