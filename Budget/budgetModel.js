const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    budgetAmount: { type: Number, required: true }
});

module.exports = mongoose.model('Budget', BudgetSchema)