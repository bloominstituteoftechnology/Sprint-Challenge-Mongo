const express = require('express');
const router = express.Router();

const Category = require('./Category');

// Set Endpoints Here
router
    .route('/')
    .get((req, res) => {
        Category
        .find({}, {'title': 1, '_id': 0 })
        .then(categories => {
            res.status(200).json({ categories })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
    })

    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category({ title });
        newCategory
            .save()
            .then(newCategory => {
                  res.status(201).json({ newCategory })  
                })
            .catch(error => {
                res.status(500).json({ error: error.message })
    })
});

// Module Export
module.exports = router;