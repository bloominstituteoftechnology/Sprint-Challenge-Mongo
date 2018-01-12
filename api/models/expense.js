import { ObjectId } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: ObjectId,
    required: true
  },
  category: {
    type: ObjectId,
    required: true
  }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
