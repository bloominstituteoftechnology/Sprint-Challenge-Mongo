const express = require('express');
const Budget = require('./budgetModel.js');
const router = express.Router();


router
.route('/')
.post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });

newBudget
.save()
.then(budget => {
    res.status(200)
    res.json({ budget })
})
.catch(err => {
    res.status(500)
    res.json({ message: "Your new budget could not be created. "})
})
})


module.exports = router