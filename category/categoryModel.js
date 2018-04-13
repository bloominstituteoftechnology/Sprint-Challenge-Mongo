const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = new mongoose.Schema({
    title: {
        Type: String,
    },
});

module.exports = mongoose.model('Category', Category);