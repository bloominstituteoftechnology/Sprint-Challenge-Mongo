const mongoose = require('mongoose');

// Categories Schema for post 
const CategoriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})



const categoriesModel = mongoose.model('Categories', CategoriesSchema);
module.exports = categoriesModel;