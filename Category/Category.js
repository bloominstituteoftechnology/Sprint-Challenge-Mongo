const mongoose = require('mongoose');

const categoryDefinition = {
    title: {
        type: String,
        required: true,
    },
};

const categorySchema = new mongoose.Schema(categoryDefinition);

module.exports = mongoose.model('Category', categorySchema)