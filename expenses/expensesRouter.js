const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router.get('/', (req, res) => {
	Expense.find({})
		.populate('category', 'title')
		.populate('budget', 'title')
		.then(expenses => res.status(200).json(expenses))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
	const expense = req.body;
	Expense.create(expense)
		.then(budget => res.status(201).json('Saved expense'))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
