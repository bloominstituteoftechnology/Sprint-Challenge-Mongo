const express = require('express');
const Budget = require('./Budget.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Budget.find()
        .then(budgetObj => {
            res.status(200).json(budgetObj);
        })
        .catch(err => {
            res.status(500).json({ err: 'Budget not found.'});
        })
    })
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const budgetData = { title, budgetAmount}
        const budget = new Budget(budgetData);

        budget.save()
        .then(newBudget => {
            res.status(201).json(newBudget);
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create a budget.'});
        })
    });

    module.exports = router;

