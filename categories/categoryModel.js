const mongoose = require('mongoose'); //used to simplify syntax 

const Category = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        require: true,
    }
});

const CategoryModel = mongoose.model('Category', Category);

module.exports = CategoryModel; 