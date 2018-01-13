const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: "int",
    required: true
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const budgetModel = mongoose.model("Budget", budgetSchema);

module.exports = budgetModel;
