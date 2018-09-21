const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

router.post('/', (req, res) => {
    let newBudget = req.body;
    if (newBudget.title === undefined || newBudget.budgetAmount === undefined) {
        res.status(400).json({ message: 'Please enter both a title and budget amount.' })
    }
    const budget = new Budget(newBudget);
    budget.save()
        .then(budget => {
            res.status(201).json(budget)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error posting budget' })
        })
})

module.exports = router;