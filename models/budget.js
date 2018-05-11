const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
  title: String,
  budgetAmount: Number
});

module.exports = mongoose.model('Budget', budgetSchema);
