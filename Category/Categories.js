const mongoose = require('mongoose');

const Categories = new mongoose.Schema({


module.exports = mongoose.model('Categories', Categories);
