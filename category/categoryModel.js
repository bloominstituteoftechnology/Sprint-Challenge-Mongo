const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  title: 'Groceries'
});

module.exports = mongoose.model('Category', Category);
