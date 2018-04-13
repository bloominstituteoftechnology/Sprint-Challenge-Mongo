const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router.get('/', (req, res) => {
	Category.find({})
		.select('title')
		.then(categories => res.status(200).json(categories))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.get('/:id', (req, res) => {
	Category.findById(req.params.id)
		.then(category => res.status(200).json(category))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
	const category = req.body;
	Category.create(category)
		.then(category => res.status(201).json(`Saved: ${category}`))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
