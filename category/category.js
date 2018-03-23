const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model('Category', categorySchema);