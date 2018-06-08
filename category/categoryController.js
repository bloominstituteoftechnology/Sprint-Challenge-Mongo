const express =  require('express');

const Category = require('./categoryModel');

const router = express.Router();

// add endpoints here 

router
    .route('/')
    // GET
    .get((req, res) => {
        Category.find()
            .select('title -_id')
            .then(categories => {
                res.json(categories)
            })
            .catch(err => {
                res.status(500).json({ error: 'error fetching categories'})
            })
    })
    // POST
    .post((req, res) => {
        const categoryData = req.body;
        const category = new Category(categoryData);

        category.save()
            .then(category => {
                res.status(201).json(category)
            })
            .catch(err => {
                res.status(500).json({ error: 'error creating category'})
            })
    })


module.exports = router;