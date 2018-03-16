const mongoose = require('mongoose');

const CategoryModel = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please supply a category title']
  }
});

module.exports = mongoose.model('Category', CategoryModel);