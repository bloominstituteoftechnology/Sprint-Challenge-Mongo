const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router.get('/', (req, res) => {
	Category.find({})
		.select('title')
		.then(budgets => res.status(200).json(budgets))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
	const category = req.body;
	Category.create(category)
		.then(budget => res.status(201).json('Saved category'))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
