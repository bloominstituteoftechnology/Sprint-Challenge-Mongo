const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schema({
	title: { type: String, required: true },
	key: { type: Number, required: true, unique: true },
	budget: [{ type: ObjectId, ref: 'Budget' }],
	expense: [{ type: ObjectId, ref: 'Expense' }],
});

module.exports = mongoose.model('Category', Category);