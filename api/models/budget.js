const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const BudgetSchema = new mongoose.Schema({
  title: String,
  startingAmount: Number,
});

module.exports = mongoose.model("Budget", BudgetSchema);
