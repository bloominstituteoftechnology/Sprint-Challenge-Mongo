const mongoose = require("mongoose");

const Budget = new mongoose.Schema({
  created: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now },
  title: { type: String, required: true },
  budgetAmount: { type: Number, required: true }
});

module.exports = mongoose.model("Budget", Budget);
