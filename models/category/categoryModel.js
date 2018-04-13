const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
  id: {
    type: ObjectId,
    ref: '',
  },
  title: {
    type: String,
    default: 'Groceries',
  },
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
