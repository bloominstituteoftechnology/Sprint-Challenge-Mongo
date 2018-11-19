const express = require('express');
const Category = require('./categoryModel.js');
const router = express.Router();



router
    .route('/')
    .get((req, res) => {

        Category
            .find()
            .select('title')
            .then(categories => {
                res.status(200).json({ categories })
            })
            .catch(err => {
                res.status(500).json({ message: "Your categories could not be found. " })
            })
    })

    .post((req, res) => {
        const {
            title
        } = req.body;
        const newCategory = new Category({
            title
        });

        if (!title) {
            res.status(400).json({ message: "Please provide a title." })
        } else {
            newCategory
                .save()
                .then(Category => {
                    res.status(200).json({ Category })
                })
                .catch(err => {
                    res.status(500).json({ message: "Your new category could not be added. " })
                })
        }
    })



module.exports = router