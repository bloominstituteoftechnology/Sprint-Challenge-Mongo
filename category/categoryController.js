const express = require('express');
const Category = require('./categoryModel');
const router = express.Router();

router
	.route('/')
	.get((req, res) => {
		Category.find()
			.select('-_id title')
			.then(categories => res.status(200).json(categories))
			.catch(err => res.status(500).json(err));
	})

	.post((req, res) => {
		const { title } = req.body;
		if (!title || title === '') {
			res.status(400).send('Please add a title for this category.');
		}

		const category = new Category({ title });
		category
			.save()
			.then(newCategory => res.status(201).json(newCategory))
			.catch(err => res.status(500).json(err));
	});

module.exports = router;
