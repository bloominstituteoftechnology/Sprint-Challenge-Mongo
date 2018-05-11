const router = require('express').Router();

const Budget = require('./budget.js');

// ============Endpoints===============

// ============Post===================
router.post('/', (req, res) => {
    const budget = new Budget(req.body);

    budget.save()
    .then(budget => {
        res.status(201).json(budget)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could Not Get Budget!' })
    })
})

router.get('/', (req, res) => {
    Budget
    .find()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Could Not Retrieve the Budgets!" })
    })
})

module.exports = router;