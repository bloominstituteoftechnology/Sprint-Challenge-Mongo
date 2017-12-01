const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budgetAmmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('budget', budgetSchema);
