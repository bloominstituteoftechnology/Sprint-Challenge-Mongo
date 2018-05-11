const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Expense = new mongoose.Schema({
  amount: {
    type: Number,
  },
  description: {
    type: String,
  },
  budget:{
    type: ObjectId,
    ref:'BudgetModel',
  },
  category: {
    type: ObjectId,
    ref: 'CategoryModel',
  }
})




module.exports = mongoose.model('ExpenseModel', Expense);
