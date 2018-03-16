const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
 amount: {
   type: Number,
   required: true,
 },
 description: {
   type: String,
   required: true,
 },
 budget: {
     type: ObjectId,
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

const ExpenseModel = mongoose.model('Expense', ExpenseSchema);

module.exports = ExpenseModel;