const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,

    }


});

const options = {
    timestamps: true,
};


const categoryModel = mongoose.model('Category', categorySchema, 'category');

module.exports = expenseModel('Category', category);