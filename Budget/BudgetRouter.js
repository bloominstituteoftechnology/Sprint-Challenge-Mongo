const express = require('express');

const Budget = require('../Budget/BudgetModel');

const router = express.Router();


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


module.exports = router;