const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Category', Category);
