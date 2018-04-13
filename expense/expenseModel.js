const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = require('../budget/budgetModel');
const Category = require('../category/categoryModel');

const Expense = new mongoose.Schema({
  amount: Number,
  description: String,
  budget: { type: ObjectId, ref: Budget }, // Monthly Spending
  category: { type: ObjectId, ref: Category } // Groceries
});

module.exports = mongoose.model('Expense', Expense);
