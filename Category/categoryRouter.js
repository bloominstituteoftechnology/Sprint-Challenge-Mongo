const express = require('express')
const router = express.Router();
const Category = require('./category.js');

router.route("/")
    .post((req, res) => {
        const category = new Category(req.body)
        category.save()
        .then(newCategory => {
            res.status(201).json(newCategory);
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Something went wrong. Please try again later."
            })
        })
    })

    .get((req, res) => {
        Category.find()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Something went wrong. Please try again later."
            })
        })
    })

module.exports = router