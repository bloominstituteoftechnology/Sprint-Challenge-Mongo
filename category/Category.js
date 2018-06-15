const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Type.ObjectId;


const Category = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category', Category);