const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const Budget = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
    validate: {
      validator: function(amount) {
        return amount >= 0;
      },
      message: 'Budget must be equal or greater than zero',
    },
  },
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }],
});

module.exports = mongoose.model('Budget', Budget);
