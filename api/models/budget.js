const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  title: String,
  budgetAmount: Number,
})

module.exports = mongoose.model('Budget', BudgetSchema);