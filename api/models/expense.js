const mongoose = require('mongoose');
const { ObjectId } = mongoose.SchemaTypes

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  budget: ObjectId,
  category: ObjectId,
})

module.exports = mongoose.model("Expense", ExpenseSchema);