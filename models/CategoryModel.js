const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
   _id: {
      type: ObjectId,
      required: true,
   },
   title: String
});

module.exports = mongoose.model('Category', CategorySchema);
