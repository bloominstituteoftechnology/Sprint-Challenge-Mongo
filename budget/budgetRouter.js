const express = require('express');
const Budget = require('./Budget.js');

const router = express.Router();

router 
.route('/')
.post((req, res) => {
    const { budget, title } =req.body;
    const newBudget = new Budget({title, budget});

    newBudget
    .save()
    .then(budget => {
        res.status(200)
        res.json({ budget })
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router