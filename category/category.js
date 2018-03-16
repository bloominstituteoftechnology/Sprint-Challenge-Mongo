const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Expenses = require('../Expenses');

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    ref: Expenses,
    required: true,
  },
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;