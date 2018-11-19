const mongoose = require('mongoose');

const BudgetSchema = new mongoose.SchemaType({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Budget', BudgetSchema);