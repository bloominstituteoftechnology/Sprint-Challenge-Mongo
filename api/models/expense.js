const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const budgetModel = mongoose.model("Budget", expesneSchema);

module.exports = expenseModel;
