const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
  _id: { type: ObjectId },
  title: { type: String, required: true, unique: true }
});
const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;
