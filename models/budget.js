const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: '0001',
  },
  title: {
    type: String,
    default: 'Budget',
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
    default: 200,
  }
});

const BudgetModel = mongoose.model('budget', BudgetSchema);

module.exports = BudgetModel;
