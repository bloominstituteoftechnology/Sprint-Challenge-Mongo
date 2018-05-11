const express = require('express');
const Budget = require('./budget');
const router = express.Router();

router
    .post((req, res) => {
        const budgetData = req.body;

        const budget = new Budget(budgetData);
        if (!budgetData.title || !budgetData.budgetAmount) {
            res.status(400).json("Please provide title and amount");
        }
        else {
            budget
                .save()
                .then(budget => {
                    res.status(200).json(budget);
                }).catch(err => {
                    res.status(500).json("There was an error while saving budget information.")
                });
        };
    });

    module.exports = router;