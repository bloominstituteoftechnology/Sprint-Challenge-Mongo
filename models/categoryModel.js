const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Category', categorySchema);