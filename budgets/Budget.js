const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Budget = new Schema({
  title: {
    type: String,
    required: true,
    unique: false
  },
  amount: {
    type: Number,
    required: true,
    unique: false
  }
});

module.exports = mongoose.model('Budget', Budget);
