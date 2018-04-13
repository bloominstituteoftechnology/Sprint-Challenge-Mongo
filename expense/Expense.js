const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  budget: {
    type: ObjectId,
    ref: 'Budget',
    required: true,
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Expense', budgetSchema);
