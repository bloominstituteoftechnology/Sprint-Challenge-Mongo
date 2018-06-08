const router = require('express').Router();
const Budget = require('./Budget');

router
    .route('/')
    .get(get)
    .post(post)

router 
    .route('./:id')
    .get((req, res) => {
        res.status(200).json({ route: '/api/budgets' + req.params.id});
    })
    .delete((req, res) => {
        res.status(200).json({status: 'implement DELETE'});
    })
    .put((req, res) => {
        res.status(200).json({status: 'implement PUT'});
    })

function get (req, res) {
    res.status(200).json({route: '/api/budgets'});
}

function post (req, res) {
    const budgetData = req.body;
    const budget = new Budget(budgetData);

    budget
        .save()
        .then(budget => {
            res.status(201).json(budget);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

module.expots = router; 