const express = require('express');

const Category = require('../models/category');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  if (info) {
    category = new Category(info);
    category
      .save()
      .then(newCategory => {
        res.status(201).send(newCategory);
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

router.get('/', (req, res) => {
  Category.find()
    .select('-_id -__v')
    .then(categories => {
      res.send(categories);
    })
    .catch(err => {
      res.send({ error: err });
    });
});

module.exports = router;
