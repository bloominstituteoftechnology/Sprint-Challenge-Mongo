const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Scheme ({
  title: String
});

module.exports = mongoose.model('Category', Category);