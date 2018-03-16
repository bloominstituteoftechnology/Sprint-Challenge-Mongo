const mongoose = require('mongoose');

const BudgetModel = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please title your budget'],
    unique: true,
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount for your budget']
  }
});

module.exports = mongoose.model('Budget', BudgetModel);