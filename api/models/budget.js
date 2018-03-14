const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  tite: {
    type:String,
    required:true
  },
  budgetAmount: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Budget', BudgetSchema);
