const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const options = {
	timestamp: true,
	strict: false
};

// An expense affects 1 budget and is part of 1 category
const Expense = mongoose.Schema(
	{
		amount: {
			type: Number,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		budget: {
			type: ObjectId,
			ref: "Budget"
		},
		category: {
			type: ObjectId,
			ref: "Category"
		}
	},
	options
);

module.exports = mongoose.model("Expense", Expense);
