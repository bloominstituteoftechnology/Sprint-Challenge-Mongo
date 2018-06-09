const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;