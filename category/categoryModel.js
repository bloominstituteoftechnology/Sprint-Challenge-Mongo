const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Category', Category);
