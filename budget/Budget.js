const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Budget", Budget);
