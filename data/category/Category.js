const mongoose = require('mongoose');
const Objectid = mongoose.Types.ObjectId;


const Category = mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Category',Category);
