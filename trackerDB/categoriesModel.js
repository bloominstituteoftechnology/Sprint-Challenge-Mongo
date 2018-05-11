const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const definition = {
  title: String,
  type: String,
  quality: String
};
const option = {
  timestamps: true,
  strict: false
};

const categorySchema = new Schema(definition, option);
const categoriesModel = mongoose.model(
  "Category",
  categorySchema,
  "categories"
);
module.exports = categoriesModel;
