import Expense from '../models/expense';

export const addExpense = (req, res) => {
	const { amount, description, budget, category } = req.body;
	const expense = new Expense({ amount, description, budget, category });
	expense.save((err, exp) => {
		if(err) {
			res.status(422).json({'something went wrong': err});
			return;
		}
		res.status(200).json(exp);
	});
}

export const getExpenses = (req, res) => {
	Expense.find({}).populate('budget').populate('category').exec((err, docs) => {
		if(err) {
			res.status(422).json({'something went wrong': err});
			return;
		}
		res.status(200).json(docs);
	})
}