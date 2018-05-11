const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./Budget.js');

// Express Router
const router = express.Router();

// Set Endpoints Here
router
    .route('/')
    .post((req, res) => {
        const budget = new Budget(req.body);
        console.log(budget)
        budget
            .save()
            .then(newBudget => {
                if(newBudget === null) {
                    res.status(404).json(newBudget);
                } else {
                    res.status(201).json(newBudget);
                }
                })
                .catch(err => res.status(500).json(err));
            })

// Module Export
module.exports = router;