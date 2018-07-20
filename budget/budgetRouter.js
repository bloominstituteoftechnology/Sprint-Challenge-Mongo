const express = require('express');
const Budget = require('./Budget.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Budget
            .find({})
            .then(response => res.status(200).json({ data: response }))
            .catch(err => res.status(500).json(err))
    })
    .post((req, res) => {
        const newBudget = req.body
        if (newBudget.title && newBudget.budgetAmount) {
            Budget.create(newBudget)
                .then(response => res.status(200).json({ data: response }))
                .catch(err => res.status(500).json(err))
        }
        else {
            res.status(400).json({ message: 'Please provide budget title and amount.' })
        }
    })

module.exports = router;
