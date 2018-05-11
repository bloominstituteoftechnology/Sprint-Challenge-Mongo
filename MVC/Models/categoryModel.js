const mongoose = require('mongoose');

const category = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
})

const Category = mongoose.model('Category', category, 'categorys');

module.exports = Category;
