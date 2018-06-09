const mongoose = require('mongoose');

const categoryDefinition = {
    title: {
        type: String,
        required: true,
    },
};

const categorySchema = new mongoose.Schema(categoryDefinition);

const categoryModel = mongoose.model('Category', categoryDefinition, 'Categories');

module.exports = categoryModel;