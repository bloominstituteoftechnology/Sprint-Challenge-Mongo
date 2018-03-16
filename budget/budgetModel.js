const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  BudgetAmount: {
    type: Number,
    required: true
  },
});

const BudgetModel = mongoose.model('Budget', BudgetSchema);

module.exports =  BudgetModel;