const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Category.find({})
    .select('title')
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const category = new Category(req.body);
    const { title } = req.body;
    category
      .save()
      .then(savedCategory => {
        res.status(201).json(savedCategory);
      })
      .catch(err => res.status(500).json(err));
  });

module.exports = router;
