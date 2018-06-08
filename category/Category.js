/* {
  _id: ObjectId('543d2c72gsb23cd657438921'),
  title: 'Groceries',
} */
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const Category = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  expense: [{ type: ObjectId, ref: 'Expense' }]
})
module.exports = mongoose.model('Category', Category)
