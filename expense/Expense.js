const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  budget: {
    type: ObjectId,
    ref: 'Budget',
  },
  category: {
    type: ObjectId,
    ref: 'Category',
  },
});

module.exports = mongoose.model('Expense', budgetSchema);
