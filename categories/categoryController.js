const express = require('express');
const router = express.Router();

const Category = require('./categoryModel');

router.route('/')
    .get((req, res) => {
        Category.find()
            .select('title')
            .then(allCats => res.json(allCats))
            .catch(err => res.status(500).json({ error: err}));
})
    .post((req, res) => {
        const { title } = req.body; 
        const newCategory = new Category({ title });
        newCategory
            .save()
            .then(category => res.status(201).json(category))
            .catch(err => res.status(500).json({ error: err }));
    })

    module.exports = router;