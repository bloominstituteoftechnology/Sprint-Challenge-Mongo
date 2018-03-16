const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
 amount: {
   type: Number,
   required: true,
 },
 description: {
   type: String,
   required: true,
 },
 budget: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Category',
     required: true,
 },
 category: {
     type: ObjectId,
     required: true
 },
 createdOn: {
   type: Date,
   timestamp: Date.now,
 }
});


module.exports = mongoose.model('Expense', ExpenseSchema);