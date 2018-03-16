const express = require('express');

const Category = require('./categoryModel');

const router = express.Router();

router.post('/', function(req, res) {
  const categoryInfo = req.body;
  const newCategory = new Category(categoryInfo);

  newCategory
    .save()
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error creating category', error: err });
    });
});

router.get('/', function(req, res) {
  Category
    .find()
    .select('title')
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({ msg: 'error getting categories', error: err })
    });
});

module.exports = router;
