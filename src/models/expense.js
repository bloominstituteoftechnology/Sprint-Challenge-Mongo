const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId

const ExpenseSchema = new mongoose.Schema({
  amount: { type: Number, require: true },
  description: { type: String, require: true },
  budget: { type: ObjectId, ref: 'Budgets', required: true },
  category: { type: ObjectId, ref: 'Categories', required: true }
})

module.exports = mongoose.model('Expenses', ExpenseSchema)