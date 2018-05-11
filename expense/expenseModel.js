const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema ({
  amount: Number,
  description: String,
  budget: {
    type: ObjectId,
    ref: 'Monthly Spending'
  },
  category: {
    type: ObjectId,
    ref: 'Grocceries',
  },
})

module.exports = mongoose.model('Expense', Expense);