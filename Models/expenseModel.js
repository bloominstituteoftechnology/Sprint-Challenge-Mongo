const mongoose = require('mongoose');

const expressModel = new mongoose.Schema({
  description: String,
  amount: Number,
  budget: {
    type: ObjectId,
    ref: 'Budget',
    category: {
      type: ObjectId,
      ref: 'Category',
    }
  }
});

module.exports = mongoose.model('Budget', expressModel);