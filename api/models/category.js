const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema(
    {
       title: {
           type : String,
           required: true
       }
    }
)
module.exports = mongoose.model('Category', categoryModel);