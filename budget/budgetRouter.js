const express = require('express');

const router = express.Router();

const Budget = require('./Budget');

router
    .route('/')
    .get((req, res) => {
        Budget
            .find()
            .then(budget => {
                res.status(200).json(budget)
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    })
    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        if(!budgetAmount){
            res.status(400).json({ error: 'Please provide a budget amount' });
            return;
        }
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json(savedBudget)
            })
            .catch(err => {
                res.status(500).json({ error: "There was an error saving the budget to the database" })
            })
    })
    

router
    .route('/:id')
    .delete((req, res) => {
        Budget
            .findByIdAndRemove(req.params.id)
            .then(budget => {
                if(budget){
                    res.status(200).json({ success: `Budget with the id ${req.params.id} has been removed from the database` })
                } else {
                    res.status(404).json({ error: "The budget with the specified ID does not exist" })
                }
            })
            .catch(err => {
                res.status(500).json({ error: "The budget could not be removed" })
            })
    })

module.exports = router;