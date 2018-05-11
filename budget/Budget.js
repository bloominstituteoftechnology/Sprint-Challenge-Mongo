const mongoose = require('mongoose');

const Budget = mongoose.Schema({
  title: { type: String, required: true, index: true },
  budgetAmount: { type: Number, required: true },
});

module.exports = mongoose.model('Budget', Budget);