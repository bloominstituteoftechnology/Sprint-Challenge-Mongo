const mongoose = require('mongoose');

const Budget = mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, default: 0, required: true },
});

module.exports = mongoose.model('Budget', Budget);
