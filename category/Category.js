const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schema({
  title: { type: String, required: true }
});

const CategoryModel = mongoose.model("Category", Category);

module.exports = CategoryModel;
