const mongoose = require("mongoose");

const options = {
	timestamp: true,
	strict: false
};

// A category can have many expenses
const Category = mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Category", Category);
