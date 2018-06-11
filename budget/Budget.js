const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

// ☞ 93dd231d-d4a7-402f-805b-b160cf8340af
/* APPROACH A - direct declaration creates schema definition inline.  Fine for simple schemas.  Schemas with many fields may be more managable using  APPROACH B in margin notes
*/
const Budget = new mongoose.Schema({
  // _id: ObjectId,
  title: String,
  budgetAmount: Number
})

module.exports = mongoose.model('Budget', Budget)
