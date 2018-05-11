const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({

  title: { type: String, required: true },
  budget: { type: Number, required: true, min: 1 },
  createdOn: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Budget', Budget, 'budgets'); // mondel_name, schema, optional_collection_name