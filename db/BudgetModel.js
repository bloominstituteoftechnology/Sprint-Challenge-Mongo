const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    title: String,
    budgetAmount: Number,
});

const BudgetModel = mongoose.model('Budget', BudgetSchema);

module.exports = BudgetModel;