const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  _id: {
    type: Schema.ObjectId,
    required: true
  },
  title: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
