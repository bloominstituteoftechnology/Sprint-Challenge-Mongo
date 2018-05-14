const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
  title: { type: String, required: true },
  budgetAmount: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model("Budget", Budget);
