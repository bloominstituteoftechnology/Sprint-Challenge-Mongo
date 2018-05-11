const mongoose = require('mongoose');

const Category = mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Category', Category, 'categories');