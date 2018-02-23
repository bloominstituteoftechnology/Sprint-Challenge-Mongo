const mongoose = require('mongoose');

const CatergorySchema = mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Category', CatergorySchema);
