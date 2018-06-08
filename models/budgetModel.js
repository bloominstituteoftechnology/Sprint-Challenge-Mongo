const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  title: String,
  budgetAmount: Number,
});

module.exports = mongoose.model('Budget', budgetSchema);