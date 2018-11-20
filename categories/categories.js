const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categoriesMod = {
    title: {
        type: String,
        required: true,
        unique: true 
    }
}
const CategoriesSchema = new mongoose.Schema(categoriesMod)
module.exports = mongoose.model('Category', CategoriesSchema, 'categories');