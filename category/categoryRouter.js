const express = require('express'); 
const Category = require('./Category.js');

const router = express.Router(); 

router
    .route('/')
    .get((req, res) => {
        Category.find()
            .then(categories => {
                res.status(200).json(categories);
            })
            .catch(error => res.status(500).json({ error: 'Error fetching category.' })); 
    })
    .post((req, res) => {
        const { title } = req.body;
        const newCategory = new Category ({ title });
        newCategory
            .save()
            .then(savedCategory => {
                res.status(201).json(savedCategory); 
            })
            .catch(error => {
                res.status(500).json({ error: error.message });
            });        
    });

    module.exports = router; 
