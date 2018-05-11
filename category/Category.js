const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schema({
    category: {type: String, required: true},
})

module.exports = mongoose.model('Category', Category);