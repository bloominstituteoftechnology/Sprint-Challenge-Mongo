const mongoose = require('mongoose');

const Category = mongoose.Schema({
    // Insert Data Here
    title: String,
});

// Module Export
module.exports = mongoose.model('Category', Category, 'categories');