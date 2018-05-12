const router = require('express').Router();
const Budget = require('./budgetModel');

router
    .post('/', function post(req, res) {
        const budgetData = req.body;
        const budget = new Budget(budgetData);

        budget
            .save()
            .then(budget => {
                res.status(201).json(budget);
            })
            .catch(err => res.status(500).json({message:'Error occured saving budget...'}))
})

module.exports = router;