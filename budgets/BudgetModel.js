const mongoose = require('mongoose');

const Budget = mongoose.Schema({
  // _id: ObjectId('507f1f77bcf86cd799439011'),
  title: String,
  budgetAmount: Number,
});

module.exports = mongoose.model('Budget', Budget);
