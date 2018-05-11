const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true
  },
  budgetAmount: {
    type: Number,
    required: [true, "Amount is required"]
  }
});

module.exports = mongoose.model("Budget", budgetSchema);
