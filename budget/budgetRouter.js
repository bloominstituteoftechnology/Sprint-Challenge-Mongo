const express = require('express');
const Budget = require('./budgetModel.js');

const budgetRouter = express.Router();

budgetRouter.post('/', (req, res) => {
    const budgetInfo = req.body;
    const budget = new Budget(budgetInfo);

    budget
        .save()
        .then(savedBudget => {
            res.status(200).json(savedBudget);
        })
        .catch(err => {
            res.status(500).json({ msg: 'Error saving budget', error: err });
        });
});

module.exports = budgetRouter;