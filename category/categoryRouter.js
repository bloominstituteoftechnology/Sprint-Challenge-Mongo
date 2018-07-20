const express = require('express');
const Category = require('./Category.js');

const router = express.Router();

router
router
    .route('/')
    .get((req, res) => {
        Category
            .find({})
            .then(response => res.status(200).json({ data: response }))
            .catch(err => res.status(500).json(err))
    })
    .post((req, res) => {
        const newCategory = req.body
        if (newCategory.title) {
            Category.create(newCategory)
                .then(response => res.status(200).json({ data: response }))
                .catch(err => res.status(500).json(err))
        }
        else {
            res.status(400).json({ message: 'Please provide category title.' })
        }
    })

module.exports = router;
