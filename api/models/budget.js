const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const BudgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  startingAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Budget", BudgetSchema);
