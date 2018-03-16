const mongoose = require('mongoose');

const BudgetModel = new mongoose.Schema({
  title: String,
  budgetAmount: Number,
});

module.exports = mongoose.model('Budget', BudgetModel);