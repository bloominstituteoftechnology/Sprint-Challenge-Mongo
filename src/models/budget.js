const mongoose = require('mongoose')

const BudgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  budgetAmount: { type: Number, require: true }
})

module.exports = mongoose.model('Budgets', BudgetSchema)
