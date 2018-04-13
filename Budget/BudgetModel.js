const mongoose = require('mongoose');

const BudgetModel = mongoose.Schema({
    title: String,
    budgetAmount: Number,
});

module.exports = mongoose.model('Budget', BudgetModel)