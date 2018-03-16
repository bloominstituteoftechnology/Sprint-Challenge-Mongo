const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
   title: String
});

module.exports = mongoose.model('Category', CategorySchema);
