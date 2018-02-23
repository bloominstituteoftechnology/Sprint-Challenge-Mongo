const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

require("./budget");
require("./category");

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: OjectId,
    ref: "Budget"
  },
  category: {
    type: ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
