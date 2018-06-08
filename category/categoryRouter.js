const router = require('express').Router();

const Budget = require('./category');
// const Expense = require('../expense/expense');
// const Category = require('../category/category');

router
    .route('/')
    .get((req, res) => {
       Category.find({})
       .then(response => {
            res.status(200).json(category);
        })
        .catch(err => res.status(500).json({error: 'Error fetching category'}))
    })

    .post((req, res) => {
        const newCategory = req.body;
        category
            .save()
            .then(savedCategory => {
                res.status(201).json(savedCategory);
            })
            .catch(err => {
                res.status(422).json({ error: 'Error saving category'});
            });
    });

    module.exports = router;