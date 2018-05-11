const express = require('express');

const Category = require('./Category');

const router = express.Router();

router.route('/')
  .get(function (req, res) {
    Category
      .find()
      .then(category => res.json(category))
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post(function (req, res) {
    const categoryInfo = req.body;

    const category = new Category(categoryInfo);

    category
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;