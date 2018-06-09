const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Category.find().select('title -_id')
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })
  .post((req, res) => {
    const data = req.body;
    const category = new Category(data);

    category.save()
      .then(category => {
        res.status(201).json(category);
      })
      .catch(error => {
        res.status(500).json(error);
      })
  })

module.exports = router;