const router = require('express').Router();

const Budget= require('./budget');

router
    .route('/')
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json(savedBudget);
            })
            .catch(err => {
                res.status(500).json({ error: 'Error saving budget'});
            });
    });

    module.exports = router;