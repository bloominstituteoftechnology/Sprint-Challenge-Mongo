const express = require('express');
const router = express.Router();

const Budget = require('./budget.js');


router 
    .route('/')
    .get((req, res) => {
        Budget.find()
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({ errorMessage: err })
            })
    })

    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        newBudget
            .save()
            .then(budget => {
                res.status(201).json({ budget })
            })
            .catch(err =>{
                res.status(500).json({errorMessage: err})
            })
    })

module.exports = router;