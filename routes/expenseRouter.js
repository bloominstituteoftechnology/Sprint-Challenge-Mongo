const express = require('express');
const router = express.Router();

const Expense = require('../models/expense.js');
const Category = require('../models/category.js');

router.post('/', (req, res) => {
    const expItem = req.body;
    const expense = new Expense(expItem);

    expense.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json({ error: err }).end());
});

router.get('/', (req, res) => {
    const aggQuery = req.query;
    let query;

    if (aggQuery.aggregatedBy === 'category') {
        query = expense.aggregate([
            { $group: { _id: '$category', total: {$sum: '$amount' }}},
            { $sort: { total: -1 }},
        ])
    } else {
        query = Expense.find({}).populate('budget category')
    }

    query
    .then(data => res.json({ data }))
    .catch(err => console.log(err).res.status(500).json({ error: err }));
});

module.exports = router;