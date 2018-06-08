const router = require('express').Router();

const Budget = require('./budgetModel.js');

router
    .router('/')
    .post((req, res) => {
        const budget = ({ title, budgetAmount } = req.body);
        const newBudget = new Budget(budget);
        newBudget.save()
            .then(savedBudget => {
                res.status(201).json(savedBudget);
            })
            .catch(error => res.status(400).json(error.message))
    })

module.exports = router;