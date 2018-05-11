const mongoose = require("mongoose");

const options = {
	timestamp: true,
	strict: false
};

// one budget can have many expenses
const Budget = mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		budgetAmount: {
			type: Number,
			required: true
		}
	},
	options
);

module.exports = mongoose.model("Budget", Budget);
