const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  title: String,
  budgetAmount: Number,
});

module.exorts = mongoose.model('Budget', Budget);
