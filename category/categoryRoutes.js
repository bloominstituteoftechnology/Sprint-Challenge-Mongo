const express = require('express');

const Category = require('./Category.js')

const router = express.Router();

router.get('/', (req, res) => {
    Category.find()
        .then(res => {
            res.status(200).json(res)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const { categoryItem } = req.params;

    Category.insertOne({ categoryItem })
        .then(categoryItem => {
            res.status(200).json(categoryItem)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;