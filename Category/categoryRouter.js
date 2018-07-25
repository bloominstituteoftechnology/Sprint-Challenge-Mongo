const express = require('express');
const Category = require('./Category.js');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Category.find()
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })
  .post((req, res) => {
    const category = new Category(req.body);

    category.save()
      .then(category => {
        res.status(201).json(category);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })

module.exports = router;