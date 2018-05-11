const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategoryModel = new mongoose.Schema({
	title: { type: String, required: true }
})

const categoryModel = mongoose.model('Category', CategoryModel);
module.exports = categoryModel;
