const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const Expense = new Schema({
  amount: {
    type: Number,
    required: true,
    validate: {
      validator: function(amount) {
        return amount >= 0;
      },
      message: 'Expense must be equal or greater than zero',
    },
  },
  description: {
    type: String,
    required: true,
  },
  budget: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }],
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

module.exports = mongoose.model('Expense', Expense);
