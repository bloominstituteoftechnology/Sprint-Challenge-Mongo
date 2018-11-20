const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = new mongoose.Schema({
    title: { type: String, required: true },
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Category', Category);
