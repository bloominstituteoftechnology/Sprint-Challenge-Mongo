const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BudgetSchema = new Schema({
        title: String,
        budgetAmount: Number,
    });

module.exports = mongoose.model('Budget', BudgetSchema)