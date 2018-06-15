const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  title: {
    type: String, 
    required: true,
    unique: true
  },
  budgetAmount: Number
});

module.exports = mongoose.model('Budget', BudgetSchema);