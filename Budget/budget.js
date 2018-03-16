const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
  title: { type: String, required: true },
  budgetAmount: { type: String, required: true }
});

module.exports = mongoose.model('Budget', Budget);
