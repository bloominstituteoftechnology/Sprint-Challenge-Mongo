const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
 _id: {
   type: Number,
   required: true,
 },
 title: {
   type: String,
   required: true,
 }
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;