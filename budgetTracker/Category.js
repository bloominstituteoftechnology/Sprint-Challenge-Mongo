const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: {
        type: String
    }
});


const categoryModel = mongoose.model('Category', CategorySchema);

module.exports = categoryModel;