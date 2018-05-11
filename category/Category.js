const mongoose = require('mongoose');

const Category = mongoose.Schema({
    // Insert Data Here
});

// Module Export
module.exports = mongoose.model('Category', Category, 'categories');