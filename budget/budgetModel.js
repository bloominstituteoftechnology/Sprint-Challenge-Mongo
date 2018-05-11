const mongoose = require('mongoose');

const Budget = mongoose.Schema({
  title: String,
  budgetAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Budget', Budget);