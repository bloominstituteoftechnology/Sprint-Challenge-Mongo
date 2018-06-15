const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Budget = newSchema({
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Budget',
  budgetAmount: 3000,
});

module.exports = mongoose.model('Budget', Budget);