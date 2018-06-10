// ☞ cce53946-511a-4035-a222-f60f9079a72b
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const Expense = new mongoose.Schema({
  _id: ObjectId,
  amount: Number,
  description: String,
  budget: {// Monthly Spending
    type: ObjectId,
    ref: 'Budget'
  },
  category: {// Groceries
    type: ObjectId,
    ref: 'Category'
  }
})
module.exports = mongoose.model('Expense', Expense)
