const express = require('express');

const Category = require('./CategoryModel.js');

const router = express.Router();

const categoryRouter = express.Router();

categoryRouter.post('/category', (req, res) => {
  const categoryInfo = req.body;

  const category = new Category(categoryInfo);

  category
    .save()
    .then(savedCategory => {
      res.status(201).json(savedCategory);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error creating category', error: err})
    })
});

categoryRouter.get('/', (req, res) => {
  Category.find({})
    .then(categories => {
      res.status(200).json(categories.title);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error getting the categories', error: err});
    });
});

module.exports = router;
