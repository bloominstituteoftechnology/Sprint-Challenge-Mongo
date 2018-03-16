const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  _id: ObjectId
});

module.exports = mongoose.model('CategoryModels', CategorySchema)
