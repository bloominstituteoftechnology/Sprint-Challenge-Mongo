const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const Budget = new mongoose.Schema({
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Budget',
  budgetAmount: 3000
})
