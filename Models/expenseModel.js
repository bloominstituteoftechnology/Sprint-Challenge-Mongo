const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Amount for expenses is required"]
  },
  description: {
    type: String,
    required: [true, "Description for expenses is required"]
  },
  budget: {
    type: ObjectId,
    ref: "Budget",
    required: [true, "Missing id of budget"]
  },
  category: {
    type: ObjectId,
    ref: "Category",
    required: [true, "Missing id of category"]
  }
});

module.exports = mongoose.model("Expense", expenseSchema);
