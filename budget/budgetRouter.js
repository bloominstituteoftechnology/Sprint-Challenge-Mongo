const router = require('express').Router();

const Budget= require('./budget');

router
    .route('/')
    .get((req, res) => {
       Budget.find()
        .then(response => {
            res.status(200).json(budget);
        })
        .catch(err => res.status(500).json({error: 'Error fetching budget'}))
    })

    .post((req, res) => {
        const { title, budgetAmount } = req.body;
        const newBudget = new Budget({ title, budgetAmount });
        console.log(newBudget);
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json(savedBudget);
            })
            .catch(err => {
                res.status(422).json({ error: 'Error saving budget'});
            });
    });

    module.exports = router;