const express = require('express');
const Expense = require('./Expense.js');
const router = express.Router();

router.post('/', (req, res) => {
	const expenseData = req.body;
	const expense = new expense(expenseData);
	expense
		.save()
		.then(expense => {
			res.status(201).json(friends);
		})
		.catch( err => {
			res.status(500).json({ Error: "Unable to create new expense"})
		})
})

router.get('/', (req, res) => {
    res.send("Working...")
});

module.exports = router;
