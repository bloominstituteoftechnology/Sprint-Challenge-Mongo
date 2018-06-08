const express = require('express'); 
const Expense = require('./Expense.js'); 
const router = express.Router(); 

router
    .route('/')
    .get((req, res) => {
        Expense.find()            
            .then(expenses => {
                res.status(200).json(expenses);
            })
            .catch(error => res.status(500).json({ error: 'Error fetching expenses.' })); 
    })
    .post((req, res) => {
        const { amount, description, budget, category } = req.body;
        const newExpense = new Expense ({ amount, description, budget, category });
        newExpense
            .save()
            .then(savedExpense => {
                res.status(201).json(savedExpense); 
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });        
    });

module.exports = router; 
