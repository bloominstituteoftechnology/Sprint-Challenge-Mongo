const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = Schema({
    title: String,
    budgetAmount: Number
});

module.exports = mongoose.model('Budget', BudgetSchema);