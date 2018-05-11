const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {}
mongoose.modelSchemas = {}

mongoose.connect('mongodb://localhost/sprint')

const BudgetSchema = new mongoose.Schema({
  title: String,
  budgetAmount: Number
})

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  budget: { type: ObjectId, ref: 'Budget' },
  category: { type: ObjectId, ref: 'Category' }
})

const CategorySchema = new mongoose.Schema({
  title: String
})

module.exports = {
  Budget: mongoose.model('Posts', PostSchema),
  Expense: mongoose.model('Expenses', ExpenseSchema),
  Category: mongoose.model('Categories', CategorySchema)
}
