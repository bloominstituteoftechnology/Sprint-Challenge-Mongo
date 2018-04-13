const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    ref: '',
  },
  title: {
    type: String,
  },
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
