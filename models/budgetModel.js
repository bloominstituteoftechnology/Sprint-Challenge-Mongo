const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  budgetAmount: { type: Number, default: 0 },
});

module.exorts = mongoose.model('Budget', Budget);
