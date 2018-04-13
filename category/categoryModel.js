const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    title: {
        type: String
    }
})

module.exports = mongoose.model('Category', Category);