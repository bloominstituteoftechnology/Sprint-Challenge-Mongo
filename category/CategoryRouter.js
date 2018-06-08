const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router
    .route('/')
    .post((req, res) => {
        const { title } = req.body;
        if (title === undefined || typeof(title) !== 'number') {
            res.status(400).json({ error: "A title is required."});
        }

        newCategory = new Category({ title })
        newCategory
            .save()
                .then(response => {
                    res.status(201).json(response);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
    })
    .get((req, res) => {
        Category.find({}, { title: 1, _id: 0 })
            .then(records => {
                res.json(records)
        })
    })

module.exports = router;