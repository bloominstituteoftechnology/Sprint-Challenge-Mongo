const express = require('express'); 

const router = express.Router(); 

const Budget = require('./Budget.js'); 


router
    .route('/')
    .get((req, res) => {
        Budget.find()
            .then(budgets => {
                res.status(200).json(budgets);
            })
            .catch(error => res.status(500).json({ error: 'Error fetching budget.' })); 
    })
    .post((req, res) => {
        const { title , budgetAmount } = req.body;
        const newBudget = new Budget ({ title , budgetAmount });
        if (!title || !budgetAmount) {
            res.status(400).json({ error: 'Please provide title and budget amount.' });
            return;
        }
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json({ savedBudget }); 
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });        
    });

    module.exports = router; 
