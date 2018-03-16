const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
   _id: {
      type: ObjectId,
      required: true,
   },
   amount: Number,
   description: String,
   budget: {
      type: ObjectId,
      ref: 'Budget',
   },
   category: {
      type: ObjectId,
      ref: 'Category',
   },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
