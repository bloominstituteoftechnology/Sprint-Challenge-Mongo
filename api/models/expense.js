const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
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

module.exports = mongoose.model('expense', expenseSchema);
