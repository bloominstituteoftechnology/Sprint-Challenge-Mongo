const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  budgetAmount: {
    type: Number,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model('Budget', budgetSchema);