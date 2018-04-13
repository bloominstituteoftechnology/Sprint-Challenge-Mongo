const mongoose = require('mongoose');

const Category = new Schema({
	title: { type: String, required: true },
});

module.exports = mongoose.model('Category', Category);
