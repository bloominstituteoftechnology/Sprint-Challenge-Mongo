const express = require('express');

const Budget = require('./budgetModel');

const router = express.Router();

router.post('/', (req, res) => {
    const budgetInfo = req.body;
    const budget = new Budget(budgetInfo);

    budget
        .save()
        .then(newBudget => {
        res.send(newBudget);
        })
        .catch(err => {
        res.status(500).json({ err: 'there was an error posting category'})
        })
});

module.exports = router;