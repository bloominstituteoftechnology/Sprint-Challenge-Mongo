const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Budget = Schema({
  title: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Budget", Budget);