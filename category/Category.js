const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = new mongoose.Schema({
    title: String
}, { collection: 'category' });

module.exports = mongoose.model('Category', Category);
