const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schema({
  title: String,
  expenses: Array
  
})

module.exports = mongoose.model('Category', Category);