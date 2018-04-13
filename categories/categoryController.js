const router = require('express').Router();

const Category = require('./categoryModel');

router
    .route('/')
    .post((req, res) => {
        const category = new Category(req.body);

        category 
            .save()
            .then(newCategory => {
                res.status(201).json(newCategory);
            })
            .catch(err => {
                res.status(500).json({ errMsg: "New category could not be saved." });
            })
    })

    .get((req, res) => {
        Category

            .find({})
            .then(categories => {
                res.status(200).json(categories);
            })
            .catch(err => {
                res.status(500).json({ errMsg: "Could not retrieve Categories List." });
            })
    })

module.exports = router;