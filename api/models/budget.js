const mongoose = require('mongoose');
const { ObjectID } = mongoose.Schema.Types;

const BudgetSchema = new mongoose.Schema({
    title: String,
    budgetAmount: Number
});

module.exports = mongoose.model("Budget", BudgetSchema);
