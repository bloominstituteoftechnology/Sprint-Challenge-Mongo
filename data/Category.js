const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', Category);