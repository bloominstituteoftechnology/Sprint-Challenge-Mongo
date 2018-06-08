const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router
    .route('/')
    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category({ title });

        newBudget
            .save()
                .then(response => {
                    res.status(201).json(response);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
    })

module.exports = router;