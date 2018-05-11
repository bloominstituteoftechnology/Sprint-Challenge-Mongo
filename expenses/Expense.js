const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  created: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now },
  amount: { type: Number, reuqired: true },
  description: { type: String, required: true },
  budget: { type: ObjectId, ref: "Budget", required: true },
  category: { type: ObjectId, ref: "Category", required: true }
});

module.exports = mongoose.model("Expense", Expense);
