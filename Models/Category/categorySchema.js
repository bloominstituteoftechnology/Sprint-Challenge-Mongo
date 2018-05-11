const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    })

const categoryModel = mongoose.model('category', categorySchema, 'categorys');
module.exports = categoryModel;