const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: { 
    type: String, 
    required: true 
  },
  budget: {           // links budget to expsense 
    type: ObjectId, 
    ref: "Budget" 
  },
  category: {         // links category to this expsense
    type: ObjectId, 
    ref: "Category" 
  }
});

module.exports = mongoose.model("Expense", Expense);
