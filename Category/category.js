const mongoose = require('mongoose');
const objectID = mongoose.Schema.Types.ObjectId;

const Category = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('Category', Category);
