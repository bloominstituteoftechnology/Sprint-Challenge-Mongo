const express = require("express");
const ObjectId = mongoose.Schema.Type.ObjectId;

const Expense = mongoose.Schema({
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
    ref: "Budget"
  },
  category: {
    type: ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model("Expense", Expense);
