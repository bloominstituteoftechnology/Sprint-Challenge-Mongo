const express = require('express');
const Budget = require('./budgetModel.js');
const router = express.Router();


router
    .route('/')

    .get((req, res) => {

        Budget
            .find()
            .then(budgets => {
                res.status(200).json({budgets})
            })

            .catch(err => {
                res.status(500).json({ message: "Budgets could not be found. "})
            })
    })

    .post((req, res) => {

        const {
            title,
            budgetAmount
        } = req.body;

        const newBudget = new Budget({
            title,
            budgetAmount
        });

        if (!title || !budgetAmount) {
            res.status(400).json({message: "Budget title or amount missing."})

        } else {
            
            newBudget
                .save()
                .then(budget => {
                    res.status(200).json({budget})
                })

                .catch(err => {
                    res.status(500).json({message: "Your new budget could not be created. "})
                })
        }
    })


module.exports = router