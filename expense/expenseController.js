const router = require('express').Router();

const Expense = require('./expenseModel');

// GET /api/expense
router
    .route('/')
    .get((req, res) => {
        Expense
        .find()
        .then(expenses => {
            res.status(200).json(expenses)
        })
        .catch(err => res.status(500).json({error: 'Your expenses could not be retrieved'}))
    })
// POST /api/categories
router
    .route('/')
    .post((req, res) => {
        console.log(req.body)
        console.log(req.params)
        const { amount, description } = req.body;
        const {id} = req.params
        const expenses = new Expense({
            _id: req.params._id,
            amount: req.body.title,
            description: req.body.description
        });
        res.status(200).json(expenses)
        .catch(err => res.status(500).json({error: 'Could not save new expenses'}))
    })


    module.exports = router;