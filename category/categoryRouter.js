const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Category.find({}, 'title -_id')
          .then(cats => {
            res.status(200).json(cats);
          })
          .catch(err => res.status(500).json({ errorMessage: "The category information could not be retrieved." }));
    })
    .post((req, res) => {
        const { title } = req.body;
        if (!title) {
            res.status(400).json({ errorMessage: "Please provide budget Title." })
            return;
        }
        const newCategory = new Category({ title });
        newCategory.save() 
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }));
    });

module.exports = router;