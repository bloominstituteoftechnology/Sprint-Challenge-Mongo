
const express = require("express");
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const BudgetSchema = new mongoose.Schema ({
  _id: {
      type: ObjectId,
      ref: 'Expense',
  },
  title: {
      type: String,
      required: true,
  },
  budgetAmount: {
      type: Number,
      required: true,
  },
});
module.exports = mongoose.model('Budget', BudgetSchema);



