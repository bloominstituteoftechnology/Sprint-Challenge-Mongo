const express = require('express');
const router = express.Router();
const Category = require('./Category')

router
    .route('/')
    .get((req, res) => {
        Category
            .find()
            .then(category => {
                res.status(200).json(category)
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    })
    .post((req, res) => {
        const { title } = req.body;
        const newCat = new Category({ title });
        if(!title){
            res.status(400).json({ error: 'Please provide a title' });
            return;
        }
        newCat
            .save()
            .then(savedCat => {
                res.status(201).json(savedCat)
            })
            .catch(err => {
                res.status(500).json({ error: 'There was an error saving the category to the data base' })
            })
    })

module.exports = router;