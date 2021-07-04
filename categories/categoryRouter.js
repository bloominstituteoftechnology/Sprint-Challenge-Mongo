const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router
    .route('/')
        .post((req, res) => {
            const newCategory = (new Category ( { title } = req.body ));
            newCategory.save()
                .then(category => res.status(201).json(category))
                .catch(err => res.json(err))
        })
        .get((req, res) => {
            Category.find( {}, { "title": 1 , "_id": 0 })
                .then(categories => res.json(categories))
                .catch(err => res.json(err))
        })

module.exports = router;