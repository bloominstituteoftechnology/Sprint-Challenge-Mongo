const mongoose = require('mongoose');

const categorySchema = new mongoose.schema ({
   
    title: {
        type: String,
        required: true,
    }


});

module.exports = mongoose.model('Category', CategoryModel)