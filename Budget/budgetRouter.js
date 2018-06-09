const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router.post('/', (req, res) => {
    const {title, budgetAmount} = req.body
    const newBudget = { title, budgetAmount}
    const budget = new Budget(newBudget)
    .save()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((error)  => {
        res.status(500).json(error)
    })
})

module.exports = router;
