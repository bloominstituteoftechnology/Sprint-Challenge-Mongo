const express = require('express'); 
const Budget = require('./Budget.js'); 

const router = express.Router(); 

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
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json(savedBudget); 
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });        
    });

    module.exports = router; 
