const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: "int",
    required: true
  },
  budget: {
    type: "object",
    required: ["_id"]
  },
  category: {
    type: "object",
    required: ["_id"]
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const budgetModel = mongoose.model("Budget", categorySchema);

module.exports = categoryModel;
