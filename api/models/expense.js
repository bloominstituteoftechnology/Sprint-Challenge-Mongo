// {
//   _id: '543d2c72gsb23cd657438921',
//   title: 'Groceries',
// }

const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {},
  category: {}
});

module.exports = mongoose.model('Expense', ExpenseSchema);
