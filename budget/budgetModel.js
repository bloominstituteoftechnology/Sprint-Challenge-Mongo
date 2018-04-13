const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  budget: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Budget', Budget);
