const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
	amount: { type: Number, required: true },
	description: { type: String, required: true },
	budget_key: { type: Number, required: true },
	budget: { type: ObjectId, ref: 'Budget' },
	category_key: { type: Number, required: true },
	category: { type: ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Expense', Expense);