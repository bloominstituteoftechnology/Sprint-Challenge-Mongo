const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  ammount: Number,
  description: String,
  budget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'budget',
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
  },
});

module.exports = mongoose.model('category', categorySchema);
