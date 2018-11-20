const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
const BudgetModel = mongoose.model('Budget', BudgetSchema);
module.exports = BudgetModel;