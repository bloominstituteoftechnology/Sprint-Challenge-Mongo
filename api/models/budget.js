const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  _id: {
    type: Schema.ObjectId,
    required: true
  },
  title: {
    type: String,
    require: true
  },
  budgetAmount: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('Budget', BudgetSchema);
