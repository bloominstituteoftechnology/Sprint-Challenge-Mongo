const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = new mongoose.Schema({
    //add
});

const categoryModel = mongoose.model('Category', Category);

module.exports = categoryModel;