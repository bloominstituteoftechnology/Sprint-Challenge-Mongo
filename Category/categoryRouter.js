const express = require('express')
const router = express.Router();
const Category = require('./category.js');

const handleError = (err, req, res, next) => {
    if (err.errors["title"]) {
      return res.status(400).json({ errorMessage: err.errors["title"].message })
    } else {
      return res.status(500).json({ errorMessage: "There was an error while saving budget to the database." })
    }
}

router.route("/")
    .post((req, res, next) => {
        const category = new Category(req.body)
        category.save()
        .then(newCategory => {
            res.status(201).json(newCategory);
        })
        .catch(error => {
            next(error)
        })
    })

    .get((req, res) => {
        Category.find()
        .select('title -_id')
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Something went wrong. Please try again later."
            })
        })
    })

router.use(handleError)

module.exports = router