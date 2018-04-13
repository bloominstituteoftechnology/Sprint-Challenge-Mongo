const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const categoryMod = mongoose.model('Category', categorySchema);

module.exports = categoryMod;