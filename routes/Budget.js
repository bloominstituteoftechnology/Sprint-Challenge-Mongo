const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
  _id: ObjectId,
  title: {
    type: String,
    required: true
  },
  budgetAmount: Number
});
module.exports = mongoose.model('Budget', Budget);