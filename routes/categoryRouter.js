const express = require('express');
const router = express.Router();

const Category = require('../models/category.js');

router.post('/', (req, res) => {
    const catItem = req.body;
    const category = new Category(catItem);

    category.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json({ error: err }).end());
});

router.get('/', (req, res) => {
    Category.find({}).select('title - _id')
    .then(cat => res.json(cat))
    .catch(err => res.status(500).json({ error: err}));
});

module.exports = router;