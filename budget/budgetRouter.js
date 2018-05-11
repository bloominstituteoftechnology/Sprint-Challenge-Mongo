const express = require('express');

const Budget = require('./budgetModel');

const router = express.Router();

router.get('/', (req, res) => {

    Budget
        .find()
        .then(budget => res.status(200).json(budget))
        .catch(err => res.status(500).json(err));
})

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

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Budget
        .findByIdAndRemove(id)
        .then(budget => {
            if (budget) {
                res.status(200).end();
            } else {
                res.status(404).json({ message: "Specific budget ID does not exist." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;