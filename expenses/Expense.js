const mongoose = require('mongoose');

const Expense = new Schema({
	amount: { type: Number, required: true },
	description: { type: String, required: true },
	budget: Number,
	category: Number,
});

module.exports = mongoose.model('Expense', Expense);
