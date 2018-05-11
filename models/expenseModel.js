const mongoose = require('mongoose');
/**
 * @param objId to allow ref to categories and budget
 */
const ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * @param amount is a number that represents total expense
 * @param description = string that tells you what the expense was
 * @param budget = ref to whatever budget it affects
 * @param category = ref to category of expense
 */

const Expense = new mongoose.Schema({
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
