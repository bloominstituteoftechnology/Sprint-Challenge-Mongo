const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;
//Schema

const Category = new Schema({
    title: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('Category', Category);
