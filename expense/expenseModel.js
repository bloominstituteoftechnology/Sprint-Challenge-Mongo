const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new mongoose.Schema({
  title: {
    amount: Number,
    description: String,
    budget: { type: ObjectId, ref: "Budget" },
    category: { type: ObjectId, ref: "Category" }
  }
});

const expenseModel = mongoose.model("Expense", expenseSchema);

module.exports = expenseModel;
