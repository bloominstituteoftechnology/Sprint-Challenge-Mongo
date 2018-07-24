const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Budget = require('./budgetModel');

// router
// 	.route('/')
// 	.get((req, res) => res.send('Budget router is functional.'))
// 	.post((req, res) => {
// 		// 	const { title, budget } = req.body;
// 		// 	if (!title || title === '') {
// 		// 		res.status(400).json({ error: 'Title is required.' });
// 		// 	}
// 		// 	if (!budget || budget <= 0) {
// 		// 		res.status(400).json({
// 		// 			error: 'Budget value is required.',
// 		// 		});
// 		// 	}
// 		// });
// 		const newBudget = (req, res) => {
// 			const budget = new Budget(req.body);
// 			budget
// 				.save()
// 				.then(newBudget => res.status(201).json(newBudget))
// 				.catch(err =>
// 					res.status(500).json({
// 						error: 'A problem was encountered while saving this budget.',
// 					}),
// 				);
// 		};
// 	});

router.post('/', function(req, res) {
	const budgetData = req.body;
	if (!budgetData.title || !budgetData.budgetAmount) {
		res
			.status(400)
			.json({ errorMessage: 'Please provide both title and amount.' })
			.end();
	}
	const budget = new Budget(budgetData);
	budget
		.save()
		.then(budget => {
			res.status(201).json(budget);
		})
		.catch(err => {
			res
				.status(500)
				.json({
					errorMessage:
						'There was an error while saving the budget to the database.',
				})
				.end();
		});
});

router.post('/', Budget);

module.exports = router;
