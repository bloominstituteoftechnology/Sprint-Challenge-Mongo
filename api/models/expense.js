import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
	amount: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	budget: {
		type: Schema.Types.ObjectId, 
		ref: 'Budget' 
	},
	category: {
		type: Schema.Types.ObjectId, 
		ref: 'Category' 
	}
});

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;