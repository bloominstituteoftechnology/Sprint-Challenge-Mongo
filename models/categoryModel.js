const mongoose = require('mongoose');

/**
 * @param title is a required string that defines what category it is
 */
const Category = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Category', Category);
