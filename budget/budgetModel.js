const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  budgetAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Budget', budgetSchema);
