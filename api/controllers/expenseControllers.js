import Expense from '../models/expense';

export const createExpense = (req, res) => {
    const { amount, description, budget, category } = req.body;
	const expense = new Expense({ amount, description, budget, category });
	expense.save((err, expense) => {
        if(err) {
            res.status(500).json({'Something is not working correctly': err});
			return;
		}
		res.status(200).json(expense);
	});
}

export const getExpenses = (req, res) => {
    Expense.find({}).then(expenses => {
        if (expenses.length === 0) {
            throw new Error();
        }
        res.json(expenses);}).catch(err => res.status(422).json(err));
} 

module.exports = {
    createExpense,
    getExpenses
}