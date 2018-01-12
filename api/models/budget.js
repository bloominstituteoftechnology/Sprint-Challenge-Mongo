const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BudgetSchema = new Schema({
    index: true, 
    title: String, 
    budgetAmount: Number,
});

module.exports = mongoose.model('Budget', BudgetSchema);
    