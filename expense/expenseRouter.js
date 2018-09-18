const express = require('express');
const Expense = require('./Expense.js');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Expense
            .find()
            .then(expenses => {
                res.status(200).json(expenses);
            })
            .catch(error => res.status(500).json({ error: error.message}));
    })
    .post((req, res) => {
        const { amount, description } = req.body;
        const newExpense = new Expense ({ amount, description });
        if (!amount || !description) {
            res.status(400).json({ error: 'Please provide amount and description.' });
            return;
        }
        newExpense
            .save()
            .then(response => {
                console.log(response);
                res.status(201).json({ response });
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    });

router.get('/:id', function (req, res) {
    const { id } = req.params;
    Expense
        .findById(id)
        .populate('budget', 'title budgetAmount _id')
        .populate('category', 'title _id')
})    

module.exports = router;