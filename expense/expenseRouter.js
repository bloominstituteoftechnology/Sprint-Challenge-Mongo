const express = require("express");
const router = express.Router();

const Expense = require("./Expense");

router
	.route("/")
	.get(get)
	.post(post);

function get(req, res) {
	const query = Expense.find()
		.populate("budget")
		.populate("category");

	query
		.then(expenses => {
			res.status(200).json(expenses);
		})
		.catch(err => {
			res.status(500).json(err);
		});
}

function post(req, res) {
	const newExpense = req.body;

	if (
		!newExpense.amount ||
		!newExpense.description ||
		!newExpense.budget ||
		!newExpense.category
	) {
		res.status(400).json({
			errorMessage:
				"Please provide an amount, description, budget id, and category id for the expense"
		});
	} else {
		const expense = new Expense(newExpense);

		expense
			.save()
			.then(expense => {
				res.status(200).json(expense);
			})
			.catch(err => {
				res.status(500).json({
					errorMessage: "There was an error saving the category to the database"
				});
			});
	}
}

module.exports = router;
