const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router
    .route('/')
        .get((req, res) => {
            Budget
                .find({})
                .then(ans => {
                    res.status(200).json(ans);
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        })

        .post((req, res) => {
            const newBudget = new Budget(req.body)
            newBudget
            .save()
            .then(ans => {
                res.status(200).json({status: "Added successfully!"})
            })
            .catch(err => {
                res.status(500).json(err)
            })
        })

module.exports = router;

