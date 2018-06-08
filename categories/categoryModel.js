const mongoose = require('mongoose');

const Category = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('Category', Category);
