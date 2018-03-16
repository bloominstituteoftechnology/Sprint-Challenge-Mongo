const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
     title: {
		   type: String
		}
})

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;

