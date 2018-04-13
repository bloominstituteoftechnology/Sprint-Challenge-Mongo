const router = require('express').Router();

const Budget = require('./budgetModel');

router
    .route('/')
    .post((req, res) => {
        const budget = new Budget(req.body);

        budget
            .save()
            .then(newBudget => {
                res.status(201).json(newBudget);
            })
            .catch(err => {
                res.status(500).json({ errMsg: "Could not save new budget information." })
            })
    })

module.exports = router;