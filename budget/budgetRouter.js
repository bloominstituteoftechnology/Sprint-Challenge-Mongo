const router = require('express').Router();

const Budget = require('./budget');

router
    .route('/')
    .get((req, res) => {
        Budget.find()
            .then(budget => {
                res.status(200).json(budget);
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
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
            .catch(err => {
                res.status(422).json({ error: err.message });
        })
    })

module.exports = router;