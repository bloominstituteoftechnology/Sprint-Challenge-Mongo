const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = require('mongoose');

const BudgetSchema = Schema({
    title: String,
    budgetAmount: Number
});

module.exports = mongoose.model('Budget', BudgetSchema);