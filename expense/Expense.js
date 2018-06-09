// ☞ cce53946-511a-4035-a222-f60f9079a72b
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const Expense = new mongoose.Schema({
  _id: ObjectId('503c2b66bcf86cs793443564'),
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
})
