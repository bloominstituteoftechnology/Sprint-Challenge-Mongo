const router = require('express').Router();

const Categories = require('./categoriesModel');

// GET /api/categories
router
    .route('/')
    .get((req, res) => {
        Categories
        .find()
        .then(budget => {
            res.status(200).json(budget)
        })
        .catch(err => res.status(500).json({error: 'Your categories could not be retrieved'}))
    })
// POST /api/categories
router
    .route('/')
    .post((req, res) => {
        console.log(req.body)
        const { title } = req.body;
        const categories = new Categories({
            title: req.body.title,
        });
        res.status(200).json(categories)
        .catch(err => res.status(500).json({error: 'Could not save new category'}))
    })


    module.exports = router;