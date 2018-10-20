const express = require('express');

const Category = require('./CategoryModel.js');

const CategoryRouter = express.Router();

CategoryRouter.post('/', (req, res) => {
  Category.create(req.body)
    .then(category => res.status(201).json(category))
    .catch(err => res.status(500).json(err));
});

CategoryRouter.get('/', (req, res) => {
  Category.find({})
    .select('title')
    .then(categories => res.status(201).json(categories))
    .catch(err => res.status(500).json(err));
});
module.exports = CategoryRouter;
