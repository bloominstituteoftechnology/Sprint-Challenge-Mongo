const Schema = require('mongoose');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

// const budgetModel = mongoose.model('Budget', budgetModel);
// const categoryModel = mongoose.model('Category', categoryModel);
const expenseSchema = new mongoose.Schema({
  amount:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  budget: [{ type: ObjectId, ref: 'Budget' }],
  category: [{ type: ObjectId, ref: 'Category' }]
});

const expenseModel = mongoose.model('Expenses', expenseSchema);

module.exports = expenseModel;