const express = require('express');
const router = express.Router();

const Expense = require('../models/expense.js');
const Category = require('../models/category.js');
const Budget = require('../models/budget.js');

router.post('/', (req, res) => {
    const expItem = req.body;
    const expense = new Expense(expItem);

    expense.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json({ error: err }).end());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Expense.findById(id)
    .populate('category', '-_id')
    .populate('budget', '-_id')

    .then(expItem => {
        res.status(201).json(expItem);
    })
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;