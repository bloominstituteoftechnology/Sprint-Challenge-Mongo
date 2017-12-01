import Budget from '../models/budget.js';

export const addBudget = (req, res) => {
	const { title, budgetAmount } = req.body;
	const b = new Budget({ title, budgetAmount })
	b.save((err, budg) => {
		if(err) {
			res.status(422).json({'something went wrong': err});
			return;
		}
		res.status(200).json(budg);
	});
}