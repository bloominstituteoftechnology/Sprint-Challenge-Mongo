const express = require('express');
const router = express.Router();

const budgetModel = require('./budgetModel')

router
    .route('/')
        .post((req,res) => {
            const { title, budgetAmount } = req.body;
            console.log({ title, budgetAmount })
            const newBudget = new budgetModel({ title, budgetAmount })
            newBudget.save()
                .then(item => {
                    res.status(201).json(item)
                })
                .catch(err => {
                    res.status(500).json({ error: "There was an error while saving the friend to the database."})
                })
        })

module.exports = router;