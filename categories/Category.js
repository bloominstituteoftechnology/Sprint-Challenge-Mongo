const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = new Schema({
	title: { type: String, required: true },
	budget: [{ type: ObjectId, ref: 'Budget' }],
	category: [{ type: ObjectId, ref: 'Expense' }],
});

module.exports = mongoose.model('Category', Category);