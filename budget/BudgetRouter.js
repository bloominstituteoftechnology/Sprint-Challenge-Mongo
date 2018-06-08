const express = require('express');
const Budget = require('./Budget.js');
const router = express.Router();

router
    .route('/')
    .post((req, res) => {
        const { title, budget } = req.body;
        const newBudget = new Budget({ title, budget });

        newBudget
            .save()
                .then(response => {
                    res.status(201).json(response);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
    })

module.exports = router;