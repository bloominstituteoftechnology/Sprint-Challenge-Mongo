const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const BudgetSchema = new mongoose.Schema({
  title: String,
  budgetAmount: Number
});

module.exports = mongoose.model("Budget", BudgetSchema);
