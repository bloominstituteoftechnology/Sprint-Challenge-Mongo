const express = require('express');
const Budget = require('../models/Budget');
const budgetController = express.Router();


budgetController
    .route('/')
    .post((req, res) => {
        const budget = new Budget(req.body);
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
    });
module.exports = budgetController;