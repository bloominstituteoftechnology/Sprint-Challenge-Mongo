const express = require('express');

const Category = require('./Category');

const router = express.Router();

router.get('/', (req, res) => {
    Category.find()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    let newCategory = req.body;

    const category = new Category(newCategory);
    category.save()
        .then(category => {
            res.status(201).json(category)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;