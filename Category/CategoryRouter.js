const express = require('express');

const Category = require('../Category/CategoryModel');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Category.find({})
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    })

    .post((req, res) => {
        const category = new Category(req.body);

        category
            .save()
            .then(newCategory => {
                if(newCategory === null) {
                    res.status(404).json(newCategory);
                } else {
                    res.status(201).json(newCategory);
                }
            })
            .catch(err => res.status(500).json(err));
    })

module.exports = router;