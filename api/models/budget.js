const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId,
		ref: 'Expense'
	},
	title: String,
	budgetAmount: Number
});

module.exports = mongoose.model('Budget', BudgetSchema);