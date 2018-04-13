const mongoose = require('mongoose');

const CategoryModel = mongoose.Schema({
    title: String,
});

module.exports = mongoose.model('Category', CategoryModel)