const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({

  title: { type: String, required: true },
  budget: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now }

});

module.exports = mongoose.Model('Budget', Budget, 'budgets'); // mondel_name, schema, optional_collection_name