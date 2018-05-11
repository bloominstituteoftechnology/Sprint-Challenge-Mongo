const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  title: String,
  budgetAmount: Number
});

module.exports = mongoose.model('Character', characterSchema);
