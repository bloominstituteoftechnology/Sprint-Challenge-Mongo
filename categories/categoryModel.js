// Mongoose
const mongoose = require('mongoose');

// Schema
const categorySchema = new mongoose.Schema({});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
