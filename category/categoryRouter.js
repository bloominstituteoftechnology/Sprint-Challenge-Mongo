const express = require('express');

const Category = require('./categoryModel');

const router = express.Router();

router.get('/', (req, res) => {

    Category
        .find()
        .select('title')
        .then(gory => res.status(200).json(gory))
        .catch(err => {
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {
    const categoryData = req.body;

    const category = new Category(categoryData);

    category
        .save()
        .then(gory => {
            res.status(200).json(gory)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;