const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const BudgetModel = moboose.model('Budgets', Budget);

module.exports = BudgetModel;