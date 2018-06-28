const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = new mongoose.Schema({
  title: String,
  budgetAmount: Number,
  
});

module.exports = mongoose.model('Budget', Budget);