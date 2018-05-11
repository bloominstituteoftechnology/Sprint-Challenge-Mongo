const express = require('express');
const Budget = require('./budget.js');
const router = express.Router();

router.post('/', (req, res) => {
	const budgetData = req.body;
	const budget = new Budget(budgetData);
	budget
		.save()
		.then(budget => {
			res.status(201).json(friends);
		})
		.catch( err => {
			res.status(500).json({ Error: "Unable to create new budget"})
		})
})

router.get('/', (req, res) => {
	res.send("Working...")
});

module.exports = router;
