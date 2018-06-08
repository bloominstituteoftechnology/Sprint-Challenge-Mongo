const router = require('express').Router();

const Budget = require('./budgetModel');

// POST /api/budgets
router
    .route('/')
    .post((req, res) => {
        console.log(req.body)
        const { title, budgetAmount } = req.body;
        const budget = new Budget({
            title: req.body.title,
            budgetAmount: req.body.budgetAmount
        });
        res.status(200).json(budget)
        .catch(err => res.status(500).json({error: 'Could not save new budget'}))
    })


    module.exports = router;