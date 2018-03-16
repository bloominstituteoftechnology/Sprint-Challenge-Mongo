const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: '0001',
  },
  title: {
    type: String,
    default: 'Grocery Budget',
    required: true,
  }
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;
