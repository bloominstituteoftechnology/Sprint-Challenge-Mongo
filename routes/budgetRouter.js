const express = require('express');
const router = express.Router();

const Budget = require('../models/budget.js');
const Category = require('../models/category.js');
const Expense = require('../models/expense.js');

router.post('/', (req, res) => {
    const budgetItem = req.body;
    const budget = new Budget(budgetItem);

    budget.save()
        .then(item => res.status(201).json(item))
        .catch(err => res.status(500).json({ error: err }).end());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Budget.findById(id)
        .then(item => {res.status(200).json(item);
        })
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;