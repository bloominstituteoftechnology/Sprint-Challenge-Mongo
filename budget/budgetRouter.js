const express = require("express");
const router = express.Router();

const Budget = require("./Budget");

router.route("/").post(post);

function post(req, res) {
	const newBudget = req.body;

	// validate - make sure all fields are present
	if (!newBudget.title || !newBudget.budgetAmount) {
		res
			.status(400)
			.json({ errorMessage: "Please provide a budget title and amount" });
	} else {
		const budget = new Budget(newBudget);

		budget
			.save()
			.then(budget => {
				res.status(201).json(budget);
			})
			.catch(err => {
				res.status(500).json({
					errorMessage: "There was an error saving the budget to the database."
				});
			});
	}
}

module.exports = router;
