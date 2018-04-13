const mongoose = require('mongoose');

const router = require('express').Router();
const Category = require('./categoryModel.js');

router
    .route('/')
    .post((req, res) => {
        const category = new Category(req.body);
        category
        .save()
        .then(newCategory => {
            res.status(201).json(newCategory);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    })
    .get((req, res) => {
        Category
        .find({})
        .select({_id:0, title:1})
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    })

    module.exports = router;