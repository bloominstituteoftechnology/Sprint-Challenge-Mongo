const router = require('express').Router();

const Expense = require('./expense.js');

// ===========Endpoints===================

// ============Post=========================

router.post('/', (req, res) => {
    const expense = new Expense(req.body);

    expense.save()
    .then(expense => {
        res.status(201).json(expense)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could Not Post Expense!' })
    })
})

// =================Get/Populate===================

router.get('/', (req, res) => {
    Expense
    .find()
    .populate('budget', {title:1},)
    .populate('category', {title:1})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Could Not Retrieve The Expense!" })
    })
})

module.exports = router;