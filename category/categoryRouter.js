const express = require('express');

const Category = require('./categoryModel.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Category
            .find()
            .then(categories => {
                res.status(200).json(categories)
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    })
    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category({ title })

        if (!title) {
            res.status(400).json([{ error: "title required" }])
            return;
        }

        newCategory
            .save()
            .then(() => {
                Category.find()
                    .select('title -_id')
                    .then(savedCategory => {
                        res.status(201).json(savedCategory);
                    })
                    .catch(err => {
                        res.status(500).json({ error: err.message })
                    })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    })


module.exports = router;