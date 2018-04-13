const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router.get('/', (req, res) => {
	Budget.find({})
		.then(budgets => res.status(200).json(budgets))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.get('/:id', (req, res) => {
	Budget.findById(req.params.id)
		.then(budget => res.status(200).json(budget))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
	const budget = req.body;
	Budget.create(budget)
		.then(budg => res.status(201).json(`Saved: ${budg}`))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
