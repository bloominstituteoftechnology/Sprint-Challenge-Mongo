const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  title: String,
  budgetAmount: Number,
});

module.exports = mongoose.model('Budget', Budget);
