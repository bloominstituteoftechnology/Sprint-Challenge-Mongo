const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router.post('/', (req, res) => {
	const budget = req.body;
	Budget.create(budget)
		.then(budget => res.status(201).json('Saved budget'))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
