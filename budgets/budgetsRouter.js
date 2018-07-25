const express = require('express');

//schema
const Budget = require('./Budget.js');

const router = express.Router();

//endpoints
router.get('/', (req, res) => {
	Budget.find({})
		.populate()
		.then(budgets => res.status(200).json(budgets))
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
    // This is the Body field which requires a 'title' and 'budgetAmount'
    // See Budget.js schema for clarity on this.
	const budget = req.body;
	Budget.create(budget)
        .then(budget => res.status(201).json('Saved budget successfully'))
        // Tested by posting with wrong fields in PostMan.  Returned
        // The validation error successfully.
		.catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;