const express = require('express');

const Budget = require('./budgetModel');

const router = express.Router();

// add endpoints here 

router
    .route('/')
    // GET
    .get((req, res) => {
        Budget.find()
            .then(budgets => {
                res.json(budgets)
            })
            .catch(err => {
                res.status(500).json({ error: 'error fetching budgets' })
            });
    })
    // POST
    .post((req, res) => {
        const budgetData = req.body;
        const budget = new Budget(budgetData);

        budget.save()
            .then(budget => {
                res.status(201).json(budget);
            })
            .catch(err => {
                res.status(500).json({ error: 'error creating budget' })
            });
    })

module.exports = router;