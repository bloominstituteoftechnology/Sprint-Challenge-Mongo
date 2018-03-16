const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: String,
  budgetAmount: Number
});

const budgetModel = mongoose.model('Budget', budgetSchema);

module.exports = budgetModel;
