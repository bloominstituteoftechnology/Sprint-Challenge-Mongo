const express = require('express');
const Budget = require('./Budget.js');

const router = express.Router();

router 
.route('/')
.get((req, res) => {
    Budget.find()
    .then(budgets => {
            res.status(200)
            res.json({ budgets })
        })
        .catch(error => {
            res.status(500).json(error)
        })
    })
.post((req, res) => {
    const { budget, title } =req.body;
    const newBudget = new Budget({title, budget});
    if(!title || !budget) {
        res.status(400).json(error)
    } else {
    newBudget
    .save()
    .then(budgets => {
        res.status(200)
        res.json({ budgets })
    })
    .catch(error => {
        res.status(500).json(error)
    })}
})

module.exports = router;