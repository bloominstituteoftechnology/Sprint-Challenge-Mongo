const express = require('express');
const Category = require('./Category.js');

const categoryRouter = express.Router();

categoryRouter.post('/', (req, res) => {
  const categoryInfo = req.body;

  const category = new Category(categoryInfo);

  category
    .save()
    .then(savedCat=> {
      res
        .status(200)
        .json(savedCat);
    })
    .catch(err => {
      res
        .status(500)
        .json({ MESSAGE: 'Error saving category', error: err });
    });
});

categoryRouter.get('/', (req, res) => {
  Category.find({})
    .select('title')
    .then(categories => {
      res
        .status(200)
        .json(categories);
    })
    .catch(err => {
      res
        .status(500)
        .json({ MESSAGE: 'Error getting categories', error: err });
    });
});

module.exports = categoryRouter;
