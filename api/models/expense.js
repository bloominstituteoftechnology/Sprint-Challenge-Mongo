const mongoose = require('mongoose');
const budget = 'budget.js';
const category = 'category.js';

const ExpenseSchema = new mongoose.Schema({
	amount: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	budget: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget', required: true}],
	category: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true}]
});

module.exports = mongoose.model('Expenses', ExpenseSchema);