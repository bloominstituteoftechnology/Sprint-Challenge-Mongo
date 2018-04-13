const mongoose = require('mongoose');

const Category = mongoose.Schema({
  title: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('Category', Category);
