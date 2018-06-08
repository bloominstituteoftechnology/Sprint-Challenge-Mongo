const express = require('express');
const Budget = require('./Budget.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        console.log(Budget)
        Budget
            .find({})
            .then(response => res.status(200).json({ data: response }))
            .catch(err => res.status(500).json(err))
    })
    .post((req, res) => {
        const newBudget = req.body
        Budget.create(newBudget)
            .then(response => res.status(200).json({ data: response }))
            .catch(err => res.status(500).json(err))
    })

module.exports = router;
