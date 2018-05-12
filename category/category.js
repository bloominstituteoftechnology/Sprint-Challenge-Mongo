const mongoose = require('mongoose');

const definition = {
    title: {
        type: String,
        required: true
    },
};

const categorySchema = new mongoose.Schema(definition); 

const categoryModel = mongoose.model('Category', categorySchema, 'categories'); 

module.exports = categoryModel;