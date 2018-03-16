const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budgetAmount: {
    Number,
    required: true,
  }
})

module.exports = mongoose.model('Budget', Budget);