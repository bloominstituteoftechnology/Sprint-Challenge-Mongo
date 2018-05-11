const express = require('express');

const Budget = require('./budgetModel');

const router = express.Router();

// router.get('/', (req, res) => {

//     Budget
//         .find()
//         .then(budget => res.status(200).json(budget))
//         .catch(err => res.status(500).json(err));
// })

router.post('/', (req, res) => {
    const budgetData = req.body;

    const budget = new Budget(budgetData);

    budget
        .save()
        .then(budget => {
            res.status(200).json(budget);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;