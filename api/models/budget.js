import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BudgetSchema = Schema({
	title: {
		type: String,
		default: 'Budget'
	},
	budgetAmount: {
		required: true,
		type: Number
	}
});

const Budget = mongoose.model('Budget', BudgetSchema);

export default Budget;