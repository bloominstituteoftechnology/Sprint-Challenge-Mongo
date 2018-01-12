import { ObjectId } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Budget", BudgetSchema);
