const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Budget = newSchema({
  title: {
    type: String, 
    required: true,
    unique: true
  },
  budgetAmount: Number
});

module.exports = mongoose.model('Budget', Budget);