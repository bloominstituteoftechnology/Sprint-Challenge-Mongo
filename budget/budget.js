const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const BudgetSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  },
});

const budgetModel = mongoose.model('Budget', BudgetSchema);

module.exports = budgetModel;