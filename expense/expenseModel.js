const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseModel = new mongoose.Schema({
	amount: { type: Number, required: true },
	description: { type: String, required: true },
	budget: { type: ObjectId, ref: 'Budget '},
	category: { type: ObjectId, ref: 'Category'}
})

const expenseModel = mongoose.model('expense', ExpenseModel);
module.exports = expenseModel;