const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router.get('/', (req, res) => {
    Category.find().select('title -_id')
    .then((categories) => {
        res.status(200).json(categories)
    })
    .catch((error) => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    const {title } = req.body
    const newCategory = { title}
    const category = new Category(newCategory)
    .save()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((error)  => {
        res.status(500).json(error)
    })
})

module.exports = router;