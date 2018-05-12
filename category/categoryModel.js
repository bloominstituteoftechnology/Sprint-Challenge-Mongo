const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = new mongoose.Schema({

  title: { type: String, required: true },
  budget: { type: ObjectId, ref: 'Budget' }

});

module.exports = mongoose.model('Category', Category, 'categories'); // mondel_name, schema, optional_collection_name