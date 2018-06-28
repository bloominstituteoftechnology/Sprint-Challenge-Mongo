const express = require('express');
const router = express.Router();

const Budget = require('./budgetModel');

// Set Endpoints Here
router
    .route('/')
    .get((req, res) => {
        Budget
            .find()
            .then(budgets => {
                res.status(200).json({ budgets })
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })

router
    .route('/')
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        newBudget
            .save()
            .then(newBudget => {
                res.status(201).json({ newBudget });
                })
                .catch(error => { 
                    res.status(500).json({ error: error.message })
            })
})

// Module Export
module.exports = router;