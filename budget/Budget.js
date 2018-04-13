const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  },
});

const budgetMod = mongoose.model('Budget', budgetSchema);

module.exports = budgetMod;