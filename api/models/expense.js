const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const ExpenseSchema = new mongoose.Schema({
	index: true,
	amount: {
		type: Number
	},
	description: {
		type: String
	},
	budget: {
		type: ObjectId,
		ref: 'Budget'
	},
	category: {
		type: ObjectId,
		ref: 'Category'
	}
});

module.exports = mongoose.model('Expense', ExpenseSchema);