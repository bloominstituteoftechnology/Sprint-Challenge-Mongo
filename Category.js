const mongoose = require('mongoose');

const Category = new mongoose.Schema ({
    title: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Category', Category, 'categories')