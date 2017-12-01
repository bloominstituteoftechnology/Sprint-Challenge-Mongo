const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
