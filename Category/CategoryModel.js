const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: {
    type: string,
    required: true
  }
});

module.exports = mongoos.model('Category', CategorySchema);
