const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectI;

const categoryModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('categoryModel', categoryModel)