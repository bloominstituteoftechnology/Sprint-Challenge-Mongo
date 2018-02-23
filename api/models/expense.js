const mongoose = require('mongoose');
const { objectID } = mongoose.SchemaTypes

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  budget: objectID,
  category: objectID,
})

module.exports = mongoose.model("Expense", ExpenseSchema);