const express = require('express');
const Category = require('./categoryModel.js');

const categoryRouter = express.Router();

categoryRouter.post('/', (req, res) => {
    const categoryInfo = req.body;

    const category = new Category(categoryInfo);

    category
        .save()
        .then(savedCategory => {
            res.status(200).json(savedCategory);
        })
        .catch(err => {
            res.status(500).json({ msg: 'Error saving category', error: err });
        });
});

categoryRouter.get('/', (req, res) => {
    Category.find({})
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(err => {
            res
                .status(500)
                .json({ msg: 'Error getting categories', error: err });
        });
});

module.exports = categoryRouter;
