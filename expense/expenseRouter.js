const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Expense.find()
          .populate('budget')
          .populate('category')
          .then(expenses => {
            res.status(200).json(expenses);
          })
          .catch(err => res.status(500).json({ errorMessage: "The expense information could not be retrieved." }));
    })
    .post((req, res) => {
        const { amount, description, budget, category } = req.body;
        const newExpense = new Expense({ amount, description, budget, category });
        newExpense.save() 
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }));
    });


module.exports = router;

