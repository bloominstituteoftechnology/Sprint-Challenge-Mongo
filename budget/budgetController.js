const router = require('express').Router();

const Budget = require('./budgetModel');

// GET /api/budget
router
    .route('/')
    .get((req, res) => {
        Budget
        .find()
        .then(budget => {
            res.status(200).json(budget)
        })
        .catch(err => res.status(500).json({error: 'Your budget could not be retrieved'}))
    })


    module.exports = router;