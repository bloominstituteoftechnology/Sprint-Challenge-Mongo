const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const BudgetModel = new mongoose.Schema({
	title: { type: String, required: true }
});

const budgetModel = mongoose.model('Budget', BudgetModel);
module.exports = BudgetModel;