const express = require('express');
const mongoose = require('mongoose');
const Category = require('./Category.js');

// Express Router
const router = express.Router();

// Set Endpoints Here
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
                }
            })
            .catch(err => res.status(500).json(err));
    })

// Module Export
module.exports = router;