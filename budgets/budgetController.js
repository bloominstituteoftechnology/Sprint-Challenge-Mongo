const router = require('express').Router();

const Budget = require('./budgetModel.js');

router
    .route('/')
    .post((req, res) => {
        const budget = new Budget(req.body);
        budget
        .save()
        .then(newBudget => {
            res.status(201).json(newBudget);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    })

    module.exports = router;