const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
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

module.exports = mongoose.model('Budget', BudgetSchema);
