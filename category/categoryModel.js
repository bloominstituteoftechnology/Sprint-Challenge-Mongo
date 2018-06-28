const mongoose = require('mongoose');

const Category = mongoose.Schema({
    // Insert Data Here
    title: {
        type: String,
        required: true
    }
});

// Module Export
module.exports = mongoose.model('categoryModel', Category, 'categories');