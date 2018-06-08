const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Category
            .find()
            .then(categories => {
                res.status(200).json(categories);
            })
            .catch(error => res.status(500).json({ error: error.message}));
    })
    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category ({ title });
        if (!title) {
            res.status(400).json({ error: 'Please provide title' });
            return;
        }
        newCategory
            .save()
            .then(response => {
                console.log(response);
                res.status(201).json({ response });
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });
    });

module.exports = router;