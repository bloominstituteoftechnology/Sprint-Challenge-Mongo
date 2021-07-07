const express = require('express');
const router = express.Router();
const Budget = require('./budget')


router
    .route('/')
    .get((req, res) => {
        Budget.find()
        .then(budget => {
            res.status(200).json(budget);
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        });
    })
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json(savedBudget);
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })

    module.exports = router;