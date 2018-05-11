const express = require('express');
const Category = require('./category');
const router = express.Router();

router 
    .route('/')
    .post((req, res) => {
        const categoryData = req.body;

        const category = new Category(categoryData);
        if (!categoryData.title) {
            res.status(400).json("Please provide title.");
        }
        else {
            category
                .save()
                .then(category => {
                    res.status(200).json(category);
                }).catch(err => {
                    res.status(500).json("There was an error while saving category information.")
                });
        };
    })
    .get((req, res) => {
        Category.find()
            .then(category => {
                res.status(200).json(category);
            }).catch(err => {
                res.status(500).json("The categories information could not be recieved.");
            });
    });

module.exports = router;