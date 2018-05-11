const mongooose = require('mongoose');
const ObjectId = mongooose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
  amount: Number,
  description: String,
  budget: {
    type: ObjectId,
    ref: 'Budget'
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Expense', Expense);