const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: String,
  budgetAmount: Number,
});

module.exports = budgetSchema;
