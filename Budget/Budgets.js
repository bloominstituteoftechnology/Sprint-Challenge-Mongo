const mongoose = require('mongoose');

const Budgets = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Budgets', Budgets);
