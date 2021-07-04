const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router
    .route('/')
        .post((req, res) => {
            const newBudget = (new Budget ( { title, budgetAmount } = req.body ));
            newBudget.save()
                .then(budget => res.status(201).json(budget))
                .catch(err => res.json(err))
        })

module.exports = router;