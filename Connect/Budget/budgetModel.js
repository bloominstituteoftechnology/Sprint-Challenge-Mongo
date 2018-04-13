const Schema = require('mongoose');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  budgetAmount:{
    type: Number,
    required: true
  }
});

const budgetModel = mongoose.model('Budget', budgetSchema);

module.exports = budgetModel;