const mongoose = require('mongoose');

const budget = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  }
})

const Budget = mongoose.model('Budget', budget, 'budgets');

module.exports = Budget;
