const express = require('express');

const router = express.Router();

const Budget = require('./budgetsModel');

router.post('/')
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({title, budgetAmount}); 

        newBudget.save()
            .then(savedBudget => {
                res.status(201).json({ savedBudget });
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })
    })

module.exports = router; 