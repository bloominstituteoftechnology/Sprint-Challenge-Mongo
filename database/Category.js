const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const Category = new Schema({
  title: String
});

module.exports = model('Category', Category);