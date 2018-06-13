// ☞ 5a4d8c2a-695e-4e98-9c1c-93355b1be12d
const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

const Category = new mongoose.Schema({
  // _id: ObjectId,
  title: String
})

module.exports = mongoose.model('Category', Category)
