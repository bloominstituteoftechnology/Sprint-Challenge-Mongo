const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = mongoose.model("Budget", BudgetSchema);
