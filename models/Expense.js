const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  butget: {type: ObjectId, ref: "Budget"},
  category: {type: ObjectId, ref: "Category"}
});

module.exports = mongoose.model("Expense", Expense);