const mongoose = require('mongoose');

const Categories = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Categories', Categories);
