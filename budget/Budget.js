const mongoose = require("mongoose");

const Budget = new mongoose.Schema({
  title: { type: String, required: true },
  budgetAmount: { type: Number, default: 0 }
});

const BudgetModel = mongoose.model("Budget", Budget);

module.exports = BudgetModel;
